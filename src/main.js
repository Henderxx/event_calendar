import Vue from 'vue'
import App from './App.vue'
// import VCalendar from './components/calendar.vue'
// import Vuecal from './components/cal2.vue'


Vue.config.productionTip = false
// Vue.use(VCalendar)
// Vue.use(Vuecal)

new Vue({
  render: h => h(App),
}).$mount('#app')

