'use strict'

import VuetifySnackbar from './components/VuetifySnackbar'

export default {
  install(Vue, options) {
    const {
      store,
      moduleName = 'snackbarVue',
      visible = false,
      text = null,
      timeout = 3000,
      multiline = false,
      color = null,
      left = false,
      right = false,
      top = false,
      bottom = false,
      vertical = false
    } = options || {};

    if (!store) {
      throw Error('`store` must be passed in options')
    }

    if(top === true && bottom === true) {
      throw Error('Either `top` or `bottom` must be true in options')
    }

    store && store.registerModule(moduleName, {
      state: {
        snackbar: {
          visible: visible,
          text: text,
          timeout: timeout,
          multiline: multiline,
          color: color,
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          vertical: vertical
        }
      },
      mutations: {
        [`${moduleName}/SHOW_SNACKBAR`]: function (state, payload) {
          state.snackbar = Object.assign(state.snackbar, Object.assign(payload, {visible: true}));
        },
        [`${moduleName}/CLOSE_SNACKBAR`]: function(state) {
          state.snackbar = Object.assign(state.snackbar, {visible: false});
        }
      }
    })

    let showSnackbar = function(payload) {
      store && store.commit(`${moduleName}/SHOW_SNACKBAR`, payload)
    }

    let closeSnackbar = function() {
      store && store.commit(`${moduleName}/CLOSE_SNACKBAR`)
    }

    Vue.mixin({
      computed: {
        snackbar() {
          return store.state[moduleName].snackbar;
        }
      },
      methods: {
        showSnackbar(payload) {
          showSnackbar(payload);
        },
        closeSnackbar() {
          closeSnackbar();
        }
      },
    })

    Vue.component(VuetifySnackbar.name, VuetifySnackbar);

    Vue.showSnackbar = function(payload) {
      this.showSnackbar(payload);
    }

    Vue.closeSnackbar = function() {
      closeSnackbar();
    }
  }
}