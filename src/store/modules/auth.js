import axios from 'axios'

const state = {
    user: '',
    token: '',
    role: ''

}

const mutations = {
    // storeUser(state, userData){
    //     state.user = userData.user
        
    // },
    authUser(state, userData) {
        state.user = userData.user
        state.token = userData.token
        state.role = userData.role
    }



}

const actions = {

    async login({commit, dispatch}, authData){

        try {
            
            //const res = await axios.post('http://192.168.0.150:32402/api/login', authData)
            const res = await axios.post('http://136.243.156.120:32402/api/login', authData)

            
            commit('authUser', {
                token: res.data.token})
            // if(res.status === 200) {
            //     commit('storeUser', {
            //         user: 'henio'
            //     })
            // }

        } catch (error) {
            const errorMessage = (error.message && error.state) || error
            dispatch('alert/error', errorMessage, { root: true })
        }
    }


}

const getters = {

    user(state) {
        return state.user
    },

    isAuthenticated(state) {
        return state.user !== null
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}