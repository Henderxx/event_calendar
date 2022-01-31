<template>
<div>
        <div class="sidepanel">
            <div class="triangle-bottomright"></div>
            <ul class="nav justify-content-center">
                <li class="nav-item ">
                  <router-link to="/" class="fs-1 text-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Główna"><i class="bi bi-house"></i></router-link>
                </li>
                <li class="nav-item ">
                  <div v-if="!auth">
                    <span data-bs-toggle="modal" data-bs-target="#logInModal">
                    <a href="#" class=" fs-1 text-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Administracja" @click.prevent="clearAlert">
                    <i class="bi bi-person-square"></i>
                    </a>
                    </span>
                  </div>
                  <div v-if="auth">
                    <span v-on:click="onLogout" data-bs-toggle="tooltip" data-bs-placement="left" title="Wyloguj" class="fs-1 text-info">
                    <i class="bi bi-arrow-bar-right"></i>
                  </span>
                  </div>
                </li>
                <li class="nav-item" v-if="auth">
                    <router-link to="/adminpanel" class=" fs-1 text-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Zatwierdzanie wydarzeń"><i class="bi bi-calendar-check"></i></router-link>
                </li>
                <li class="nav-item">
                  <span data-bs-toggle="modal" data-bs-target="#formularzModal" @click.prevent="clearAlert">
                    <a href="#" class=" fs-1 text-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Dodawanie wydarzeń">
                    <i class="bi bi-plus-circle"></i>
                    </a>
                  </span>
                    
                </li>
                <li class="nav-item">
                  <span v-on:click="getEvents" data-bs-toggle="tooltip" data-bs-placement="left" title="Odśwież listę wydarzeń"  class="fs-1 text-info">
                    <!-- <router-link to="/" ></router-link> -->
                    <i class="bi bi-arrow-repeat"></i>
                  </span>
                  
                    
                </li>
            </ul>
            <div class="triangle-topright"></div>
        </div>

        <div>
            <!-- Login Modal -->
            <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-3 shadow">
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
                    <div class="modal-content rounded-3 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h5 class="modal-title text-center" id="formularzModalLabel">Dodawanie wydarzenia</h5>
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
import Login from './login.vue'
import Form from './addEvents.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
     components: {
    'formularz': Form,
    'login': Login,
     },
     methods: {
      ...mapActions('alert', {
        clear: 'clear'
      }),
      ...mapActions('calEvents', {
        getEvents: 'getEvents'
      }),
      ...mapActions('auth', {
        logout: 'logout'
      }),

      onLogout(){
        this.logout()
      },

      clearAlert(){
        this.clear()
      },
    },

     computed: {
       ...mapGetters('auth', {
         auth: 'isAuthenticated'
       })
     }
}
</script>

<style>

</style>