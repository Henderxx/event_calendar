<template>
<div>
        <div class="sidepanel">
            <div class="triangle-bottomright"></div>
            <ul class="nav flex-column">
                <li class="active">
                  <span data-bs-toggle="modal" data-bs-target="#logInModal">
                    <a href="#" class=" fs-1 text-info" data-bs-toggle="tooltip" data-bs-placement="left" title="Login" @click.prevent="clearAlert">
                    <i class="bi bi-person-square"></i>
                    </a>
                  </span>
                </li>
                <li>
                    <router-link to="/adminpanel" class="nav-link fs-1 text-info"><i class="bi bi-plus-circle"></i></router-link>
                </li>
                <li>
                    <a href="#" class=" fs-1 text-info" data-bs-toggle="modal" data-bs-target="#formularzModal" @click.prevent="clearAlert">
                    <i class="bi bi-plus-circle"></i>
                    </a>
                </li>
                <li>
                    <a href="#upcoming_events" class="nav-link fs-1 text-info" v-on:click="getEvents">
                    <i class="bi bi-arrow-repeat"></i>
                    </a>
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

        <!-- <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="bi bi-house"></i>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi" width="24" height="24" role="img" aria-label="Dashboard"><use xlink:href="#speedometer2"/></svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi" width="24" height="24" role="img" aria-label="Orders"><use xlink:href="#table"/></svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi" width="24" height="24" role="img" aria-label="Products"><use xlink:href="#grid"/></svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi" width="24" height="24" role="img" aria-label="Customers"><use xlink:href="#people-circle"/></svg>
        </a>
      </li>
    </ul>
    <div class="dropdown border-top">
    </div>
</div> -->

</div>
    







</template>

<script>
import Login from './login.vue'
import Form from './addEvents.vue'

export default {
     components: {
    'formularz': Form,
    'login': Login,
     }
}
</script>

<style>

</style>