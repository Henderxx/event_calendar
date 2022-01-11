import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = true
Vue.use(VCalendar, {
  componenPrefix: 'vc',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
