import axios from "axios";

const state = {
_events: ''
}

const mutations = {
    saveEvents(state, EventData) {
        state._events = EventData
    }
}

const actions = {
    async getEvents({commit, dispatch}) {
        try {
            const res = await axios.get('http://136.243.156.120:32402/api/list')
            //const res = await axios.get('http://192.168.0.150:32402/api/list')
            commit('saveEvents',res.data )
        } catch (error) {
            const errorMessage = (error.message && error.state) || error
            dispatch('alert/error', errorMessage, { root: true })
        }
    }
}

const getters = {
    _eventsGetter(state) {
        return state._events
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}