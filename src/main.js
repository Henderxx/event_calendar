import Vue from 'vue'
import VCalendar from 'v-calendar';
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'




Vue.config.productionTip = false
 Vue.use(VCalendar)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

