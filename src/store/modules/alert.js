const state = {
    type: null,
    message: null,
    response: ''
}

const mutations = {
    success(state, message){
        state.type = 'success',
        state.message = message
    },
    error(state, message){
        state.type = 'error',
        state.message = message
    },
    clear(state){
        state.type = null
        state.message = null
    },
    setResponse(state,message) {
        state.response = message
    }
}

const actions = {
    success({ commit }, message) {
        commit('success', message)
    },
    error({ commit }, message) {
        commit('error', message)
    },
    clear({ commit }) {
        commit('clear')
    },
    response({commit}, message){
        commit('setResponse', message)
    }

}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}