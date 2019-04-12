import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import App from './App.vue'
import VueSnackbar from './index'

Vue.use(Vuex)

const store = new Vuex.Store()

Vue.use(VueSnackbar, {
  store: store,
  top: true,
  moduleName: 'sampleVueSnackbar'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
