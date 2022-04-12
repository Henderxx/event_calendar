<template>
  <!-- <div id="app">
  <sidebar></sidebar>
  <router-view></router-view>
  </div> -->
    
    <v-app>
      <v-app-bar></v-app-bar>
      <v-main>
        <!-- <sidebar/> -->
        <v-container>
        <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
// import sidebar from './components/sidebar.vue'
export default {
  name: 'App',
  components: {
    // sidebar
  },
  created() {
    this.$store.dispatch('auth/tryAutoLogin')
  }
}
</script>

<style lang="scss">
</style>

// https://antoniandre.github.io/vue-cal/
// https://tallent.us/vue-simple-calendar/