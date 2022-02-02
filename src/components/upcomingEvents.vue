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
              <th v-if="auth">Akcje</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ev) of _eventsGetter" :key="ev.id">
              <td>{{ev.id}}</td>
              <td>{{ev.eventstartdate}}</td>
              <td>{{ev.eventstopdate}}</td>
              <td>{{ev.eventname}}</td>
              <td>{{ev.eventpersoncreator}}</td>
              <td>{{ev.descr}}</td>
              <td v-if="auth"><button class="btn btn-danger" v-on:click="delApprovedLecture(ev.id)">Usuń</button></td>
          </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState({
            // _events: state => state.calEvents._events,
            alert: state => state.alert
        }),

        ...mapGetters('calEvents', {
            _eventsGetter: 'eventsGetter'
        }),

        ...mapGetters('auth', {
         auth: 'isAuthenticated'
       })
    },

    methods: {
        ...mapActions('calEvents', {
            getEvents: 'getEvents'
        }),
        ...mapActions('prelection',{
            delApprovedLecture: 'delApprovedLecture'
        })
    },

    mounted() {
        this.getEvents()
    }
}
</script>

<style lang ="scss">

</style>