<template>
  <div id="upcoming">
      <div class="my-5 py-5 text-center">
          <button class="btn btn-dark me-5" v-on:click="getEvents">Weż zdarzenia</button>
      </div>

      <table class="table table-dark table-striped">
          <thead class="table-light">
          <tr>
              <th>id</th>
              <th>Data rozpoczęcia</th>
              <th>Data zakończenia</th>
              <th>Nazwa prelekcji</th>
              <th>Prowadzacy</th>
              <th>Opis</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ev,index) of _events" :key="ev.eventname">
              <td>{{index}}</td>
              <td>{{ev.eventstartdate}}</td>
              <td>{{ev.eventstopdate}}</td>
              <td>{{ev.eventname}}</td>
              <td>{{ev.eventpersoncreator}}</td>
              <td>{{ev.descr}}</td>
          </tr>


          </tbody>

      </table>

        

  </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
        }
    },
    
    computed: {
        ...mapState({
            _events: state => state.calEvents._events,
            alert: state => state.alert
        })
    },

    methods: {
        ...mapActions('calEvents', {
            getEvents: 'getEvents'
        }),

        // async fetchEvents() {
        //     this.getEvents()
        // },
    },

    mounted() {
        this.getEvents()
    }

}
</script>

<style lang ="scss">

</style>