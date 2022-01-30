<template>
  <div id="app">
  <sidebar></sidebar>
  <router-view></router-view>
  </div>
    
</template>

<script>
import sidebar from './components/sidebar.vue'


export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style lang="scss">

</style>

// https://antoniandre.github.io/vue-cal/
// https://tallent.us/vue-simple-calendar/