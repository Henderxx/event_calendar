import Vue from 'vue'
import VCalendar from 'v-calendar';
import App from './App.vue'
import store from './store'
import 'bootstrap'




Vue.config.productionTip = false
 Vue.use(VCalendar)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

