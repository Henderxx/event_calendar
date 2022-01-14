<template>
  <div id="app">
        <div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-5">
              <h1 class="display-5 fw-bold text-white">Dark mode hero</h1>
              <div class="col-lg-6 mx-auto">
                <vue-cal></vue-cal>
                <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                  <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
                </div>
              </div>
            </div>
          </div>


        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <vue-cal></vue-cal>
              <!-- <img src="../src/assets/logo.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> -->
            </div>
            <div class="col-lg-6">
              <formularz>

              </formularz>
            </div>
          </div>
        </div>



    </div>
</template>

<script>
import VueCal from './components/cal2.vue'
import Form from "./components/formularz.vue"

export default {
  name: 'App',
  components: {
    'vue-cal': VueCal,
    'formularz': Form,
  }
}
</script>

<style lang="scss">
// 
</style>

// https://antoniandre.github.io/vue-cal/
// https://tallent.us/vue-simple-calendar/