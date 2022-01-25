import axios from 'axios'

const state = {
    eventName: '',
    eventCreator: '',
    eventDescription: '',
    startDate: '',
    endDate: ''

}

const mutations = {

}

const actions = {

async addLecture(){
    try {
        const req = await axios.post('http://136.243.156.120:32402/api/lecturesadd', eventData)
        console.log(req.status);
    } catch (error) {
        console.log(error);
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