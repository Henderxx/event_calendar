<template>
  <div id="upcoming">
      <div class="my-5 py-5 text-center">
          <button class="btn btn-dark me-5" v-on:click="fetchEvents">Weż zdarzenia</button>
          <button class="btn btn-dark" v-on:click="fetchEvents2">Weż zdarzenia v2</button>
      </div>
      <table class="table table-dark table-striped">
          <thead>
          <tr>
              <th>id</th>
              <th>Data</th>
              <th>Nazwa</th>
              <th>Opis</th>
              <th>Prowadzący</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>id</td>
              <td>Data</td>
              <td>Nazwa</td>
              <td>Opis</td>
              <td>Prowadzący</td>
          </tr>
          <tr>
              <td>id</td>
              <td>Data</td>
              <td>Nazwa</td>
              <td>Opis</td>
              <td>Prowadzący</td>
          </tr>
          <tr>
              <td>id</td>
              <td>Data</td>
              <td>Nazwa</td>
              <td>Opis</td>
              <td>Prowadzący</td>
          </tr>
          <tr>
              <td>id</td>
              <td>Data</td>
              <td>Nazwa</td>
              <td>Opis</td>
              <td>Prowadzący</td>
          </tr>

          </tbody>

      </table>

      <div class="pt-5 bg-light">
          <p>{{res}}</p>
      </div>

      <div class="pt-5 bg-bg-success">
          <p>{{$store.state._events}}</p>
      </div>
      <div v-if="alert.message" class="pt-5 bg-bg-bg-warning">
          <p>{{alert.message}}</p>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'
import axios from 'axios'


export default {
    data(){
        return {
        res: ''
        }
    },
    
    computed: {
        ...mapState({
            _events: state => state._events,
            alert: state => state.alert
        })
    },

    methods: {
        ...mapActions('calEvents', {
            getEvents: 'getEvents'
        }),

        async fetchEvents() {
            this.getEvents()
        },

        async fetchEvents2(){
             this.res = await axios.get('http://136.243.156.120:32402/api/list', {
                 headers: {'Access-Control-Allow-Origin': '*'}
             })
        }
    },

}
</script>

<style lang ="scss">

</style>