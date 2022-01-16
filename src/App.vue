<template>
  <div id="app" class="hide-scrollbar">
        <div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-5">
              <div class="col-lg-8 mx-auto">
              <h1 class="display-5 fw-bold text-white mb-4 pb-3"> Witaj w Kalendarzu Karczmy</h1>
                <vue-cal class="mt-4"></vue-cal>
              </div>
            </div>
        </div>

        <div class="px-4 py-5 text-center">
            <div class="py-5">
              <div class="col-lg-8 mx-auto">
              <h1 class="display-5 fw-bold text-white mb-4 pb-3"> Nadchodzące wydarzenia</h1>
                <upcoming class="mt-4"></upcoming>
              </div>
            </div>
        </div>

    <div class="sidepanel">
      <div class="triangle-bottomright"></div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link fs-1 text-info" data-bs-toggle="modal" data-bs-target="#logInModal">
            <i class="bi bi-person-square"></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link fs-1 text-info" data-bs-toggle="modal" data-bs-target="#formularzModal">
            <i class="bi bi-plus-circle"></i>
          </a>
        </li>
      </ul>
      <div class="triangle-topright"></div>
    </div>

        <div>
          <!-- Login Modal -->
          <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h5 class="modal-title text-center" id="logInModalLabel">Logowanie</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Zamknij"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                  <login></login>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <!-- Formularz Modal -->
          <div class="modal fade" id="formularzModal" tabindex="-1" aria-labelledby="formularzModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h5 class="modal-title text-center" id="formularzModalLabel">Dodaj wydarzenie</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <formularz></formularz>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import VueCal from './components/cal2.vue'
import Login from './components/login.vue'
import Form from './components/formularz.vue'
import Upcoming from './components/upcoming_events.vue'




export default {
  name: 'App',
  components: {
    'vue-cal': VueCal,
    'formularz': Form,
    'login': Login,
    'upcoming': Upcoming
    
  }
}
</script>

<style lang="scss">

</style>

// https://antoniandre.github.io/vue-cal/
// https://tallent.us/vue-simple-calendar/