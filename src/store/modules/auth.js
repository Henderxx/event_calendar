import axios from 'axios'

const state = {
    email: '',
    password: '',
    user: ''
    
}

const mutations = {
    storeUser(state, userData){
        state.user = userData.user
        
    },



}

const actions = {

    async login({commit, dispatch}, authData){

        try {
            
            //const res = await axios.post('http://192.168.0.150:32402/api/login', authData)
            const res = await axios.post('http://136.243.156.120:32402/api/login', authData)
            // const res = await axios.post('http://136.243.156.120:32402/api/login', {
            //     login: authData.login,
            //     haslo: authData.password
            // })

            if(res.status === 200) {
                commit('storeUser', {
                    user: 'henio'
                })
            }

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