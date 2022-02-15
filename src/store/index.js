import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import alert from './modules/alert'
import prelection from './modules/prelection'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        alert,
        prelection,
    }
})