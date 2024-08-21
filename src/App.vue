<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
        <v-toolbar-title>Most used word</v-toolbar-title>
      </v-app-bar>
      <HomePage></HomePage>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'App',

  components: {
    HomePage
  },

  data: () => ({
    //
  }),
}
</script>
