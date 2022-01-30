<template>
  <div class="">
      <div class="bg-dark py-5 text-center">
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
                <upcoming class="mt-2" id="upcoming_events"></upcoming>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import VueCal from '../components/calendar.vue'
import Upcoming from '../components/upcomingEvents.vue'
import { mapActions, mapState } from 'vuex'



export default {
components: {
    'vue-cal': VueCal,
    'upcoming': Upcoming,
},
computed: {
    ...mapState({
      alert: state => state.alert
    })
  },

  methods: {
    ...mapActions(
      'alert',{
        clear: 'clear'
      },
    ),

    ...mapActions('calEvents', {
      getEvents: 'getEvents'
    }),

    clearAlert(){
      this.clear()
    }
  },
}
</script>

<style>

</style>