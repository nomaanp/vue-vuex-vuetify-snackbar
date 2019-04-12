<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <vuetify-snackbar></vuetify-snackbar>
      <v-btn @click="show">
        Show
      </v-btn>
      <v-btn @click="showError" color="error">
        Show Error
      </v-btn>
    </v-content>
  </v-app>
</template>

<script>
import VuetifySnackbar from './components/VuetifySnackbar'

export default {
  name: 'App',
  components: {
    VuetifySnackbar
  },
  methods: {
    show() {
      this.showSnackbar({text: 'Lorem Ipsum', color: 'success'})
    },
    showError() {
      this.showSnackbar({text: 'Lorem Ipsum', color: 'error'})
    }
  },
  mounted() {
    this.showSnackbar({text: 'Lorem Ipsum', color: 'success'})
  }
}
</script>