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
    setLogoutTimer({dispatch}, expirationTime) {
        const now = Date.now()
        setTimeout(() => {
            dispatch('logout')
        }, expirationTime * 1000 - now)
    },

    async login({commit, dispatch}, authData){
        try {
            //const res = await axios.post('http://192.168.0.150:32402/api/login', authData)
            const res = await axios.post('http://136.243.156.120:32402/api/login', authData)
            if(res.status === 200) {
                dispatch('alert/success', res.statusText, { root: true })
                const token = res.data.token
                const userObj = JSON.parse(Buffer.from((token.split('.')[1]), 'base64'))
                const user = userObj.user
                const userRole = res.data.role
                const userExpiry = new Date(userObj.exp * 1000)
    
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)
                localStorage.setItem('userId', res.data.id)
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

    logout({commit, dispatch}){
        commit('clearUser')
        dispatch('alert/clear', null, { root: true })
        localStorage.clear()
        router.replace('/')
    },

    tryAutoLogin({ commit }){
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if(!token) {
            return
        }
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        const now = new Date()
        if(now >= expirationDate){
            localStorage.clear()
            return
        }
        commit('authUser', {
            token: token,
            userId: userId
        })

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