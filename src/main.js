import Vue from 'vue'
import VCalendar from 'v-calendar';
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'
import vuetify from './plugins/vuetify'




Vue.config.productionTip = false
Vue.use(VCalendar)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

