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
              <td v-if="auth">{{ev.contactEmail}}</td>
              <td><span v-if="!ev.approved" class="badge bg-warning text-black fs-6">Oczekujące</span><span v-else class="badge bg-success fs-6">Zatwierdzone</span></td>
              <!-- <td v-if="auth"><button class="btn btn-danger" v-on:click="delPrelection(ev.id)">Usuń</button></td> -->
              <td v-if="auth"><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletingModal" v-on:click="evId=ev.id" @click.prevent="clearAlert">Usuń</button></td>
          </tr>
          </tbody>
      </table>
    <!-- deleting event modal -->
    <div class="modal fade" id="deletingModal" tabindex="-1" aria-labelledby="deletingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-3 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <!-- <h5 class="modal-title text-center" id="deletingModalLabel">Usuń zdarzenie</h5> -->
                    <!-- <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Zamknij"></button> -->
                </div>
                <div class="modal-body p-5 pt-0">
                    <!--  form input dla powodu usuniecia -->
                    <div class="mb-3" v-if="!alert.message">
                        <label for="deleteReason" class="form-label">Powód usunięcia (opcjonalnie)</label>
                        <textarea rows="3" class="form-control bg-dark text-white" v-model="deleteReason" id="deleteReason"></textarea>
                    </div>
                    <div v-if="alert.message" >
                        <div v-if="alert.type === 'success'" class="p-2 my-3 bg-success text-white rounded-3">
                        <p class="align-self-center">Pomyślnie usunięto</p>
                        </div>
                        <div v-if="alert.type === 'error'" class="p-2 my-3 bg-danger text-white rounded-3">
                        <p class="align-self-center">Błąd podczas usuwania</p>
                        </div>
                        
                    </div>
                    <button type="submit" class="w-100 mb-2 btn btn-lg rounded-4 btn-danger" v-on:click="onDelete" v-if="!alert.message">Usuń</button>
                    <button type="button" class="w-100 mb-2 btn btn-lg rounded-4 btn-outline-light" data-bs-dismiss="modal" aria-label="Zamknij" @click.prevent="clearAlert">Zamknij</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return {
            deleteReason: '',
            evId: ''
        }
    },
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
        }),
         ...mapActions('alert', {
        clearAlert: 'clear'
      }),

        onDelete(){
            const msg ={}
            msg.id = this.evId
            msg.reason = this.deleteReason
            this.delPrelection(msg)
            this.deleteReason = ''
            this.evId = ''
        }
    },

    mounted() {
        this.getPrelections()
    }
}
</script>

<style lang ="scss">

</style>