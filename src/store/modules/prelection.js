import axios from 'axios'

const state = {
    // eventName: '',
    // eventCreator: '',
    // eventDescription: '',
    // startDate: '',
    // endDate: '',
    // eventId: ''

}

const mutations = {

}

const actions = {

async addLecture({dispatch}, eventData){
    try {
        const req = await axios.post('http://136.243.156.120:32402/api/eventadd', eventData)
        //const req = await axios.post('http://192.168.0.150:32402/api/eventadd', eventData)
        if (req.status === 200) {
            dispatch('alert/success', req.statusText, {root: true})
        }
    } catch (error) {

        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
    }
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