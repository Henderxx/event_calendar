<template>
  <div id="upcoming">
      <!-- <div class="my-5 py-5 text-center">
          <button class="btn btn-dark me-5" v-on:click="getEvents">Weż zdarzenia</button>
      </div> -->
      <table class="table table-dark table-striped table-hover">
          <thead class="table-light">
          <tr>
              <th>id</th>
              <th>Data rozpoczęcia</th>
              <th>Data zakończenia</th>
              <th>Nazwa prelekcji</th>
              <th>Prowadzacy</th>
              <th>Opis</th>
              <th v-if="auth">Kontakt</th>
              <th>Status</th>
              <th v-if="auth">Akcje</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ev,index) of prelectionsGetter" :key="index"  class="align-middle">
              <td>{{index + 1}}</td>
              <td>{{ev.startDate}}</td>
              <td>{{ev.stopDate}}</td>
              <td>{{ev.name}}</td>
              <td>{{ev.author}}</td>
              <td>{{ev.description}}</td>
              <td v-if="auth">{{ev.email}}</td>
              <td><span v-if="!ev.approved" class="badge bg-warning text-black fs-6">Oczekujące</span><span v-else class="badge bg-success fs-6">Zatwierdzone</span></td>
              <td v-if="auth"><button class="btn btn-danger" v-on:click="delPrelection(ev.id)">Usuń</button></td>
              <!-- <td v-if="auth"><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletingModal">Usuń</button></td> -->
          </tr>
          </tbody>
      </table>
    <!-- deleting event modal -->
    <!-- <div class="modal fade" id="deletingModal" tabindex="-1" aria-labelledby="deletingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-3 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h5 class="modal-title text-center" id="deletingModalLabel">Usuń zdarzenie</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Zamknij"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                    < form input dla powodu usuniecia >
                    <div class="mb-3">
                        <label for="deleteReason" class="form-label">Powód usunięcia (opcjonalnie)</label>
                        <textarea rows="3" class="form-control bg-dark text-white" v-model="deleteReason" id="deleteReason"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex'

export default {
    // data(){
    //     return {
    //         deleteReason: ''
    //     }
    // },
    computed: {
        ...mapState({
            // _events: state => state.calEvents._events,
            alert: state => state.alert
        }),

        ...mapGetters('prelection', {
            prelectionsGetter: 'prelectionsGetter'
        }),

        ...mapGetters('auth', {
         auth: 'isAuthenticated'
       })
    },

    methods: {
        ...mapActions('prelection',{
            delPrelection: 'delPrelection',
            getPrelections: 'getPrelections'
        })
    },

    mounted() {
        this.getPrelections()
    }
}
</script>

<style lang ="scss">

</style>