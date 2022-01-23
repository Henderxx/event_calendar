import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import calEvents from './modules/calEvents'
import alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        calEvents,
        alert
    }
})