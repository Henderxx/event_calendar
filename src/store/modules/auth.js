import axios from 'axios'
import router from '../../router'

const state = {
    token: null,
    userId: null,
    user: null

}

const mutations = {
    storeUser(state, userData){
        state.user = userData
    },
    authUser(state, userData) {
        state.token = userData.token
        state.userId = userData.id
    },
    clearUser(state){
        state.token = null,
        state.userId = null,
        state.user = null
    }

}

const actions = {
    setLogoutTimer({dispatch}, expirationTime){
        const now = Date.now()
        setTimeout(()=> {
            dispatch('logout'), expirationTime * 1000 - now
        })
    },

    async login({commit, dispatch}, authData){

        try {
            //const res = await axios.post('http://192.168.0.150:32402/api/login', authData)
            const res = await axios.post('http://136.243.156.120:32402/api/login', authData)
            if(res.status === 200) {
                dispatch('alert/success', res.statusText, { root: true })
                const token = res.data.token
                const userObj = JSON.parse(atob(token.split('.')[1]))
                const user = userObj.user
                const userRole = userObj.role
                const userExpiry = new Date(userObj.exp * 1000)
    
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)
                localStorage.setItem('expirationDate', userExpiry)
    
                commit('storeUser',{
                    user: user,
                    role: userRole,
                }) 
                commit('authUser',{
                    token: res.data.token,
                    userId: res.data.id
                })
                dispatch('setLogoutTimer', userObj.exp)
                router.replace('/adminpanel')
            }

        } catch (error) {
            const errorMessage = (error.message && error.state) || error
            dispatch('alert/error', errorMessage, { root: true })
        }
    },

    logout({commit}){
        commit('clearUser')
        commit('alert/clear', {root: true})
        localStorage.clear()
        router.replace('/')
    }


}

const getters = {

    user(state) {
        return state.user
    },

    isAuthenticated(state) {
        return state.token !== null
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}