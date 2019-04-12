<template>
  <v-snackbar
    :timeout="snackbar.timeout"
    :color="snackbar.color"
    :top="snackbar.top"
    :left="snackbar.left"
    :bottom="snackbar.bottom"
    :right="snackbar.right"
    v-model="snackbar.visible"
    :multiLine="snackbar.multiline"
    :vertical="snackbar.vertical"
    >
      {{ snackbar.text }}
      <v-btn flat dark @click="closeSnackbar">
        Close
      </v-btn>
  </v-snackbar>
</template>
<script>
  export default {
    name: 'VuetifySnackar'
  }
</script>