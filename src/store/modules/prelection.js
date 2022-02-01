import axios from 'axios'

const state = {
    pendingLectures: []
    // eventName: '',
    // eventCreator: '',
    // eventDescription: '',
    // startDate: '',
    // endDate: '',
    // eventId: ''

}

const mutations = {
    addPendingLectures(state, data){
        state.pendingLectures = []

        for(const item of data){
            const pendingItem = {}
            const startDate = new Date(item.eventstartdate)
            const stopDate = new Date(item.eventstopdate)
            pendingItem.id = item.id
            pendingItem.startDate = startDate
            pendingItem.stopDate = stopDate
            pendingItem.name = item.eventname
            pendingItem.author = item.eventpersoncreator
            if(item.descr === null){
                pendingItem.description = ''
            } else {
                pendingItem.description = item.descr
            }

            state.pendingLectures.push(pendingItem)
        }
        
    }

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
},

async approveLecture({dispatch},selectedLecture) {
    const token = localStorage.getItem('token')
    const lectureToSend = {id: `${selectedLecture}`}
    try {
        console.log(`sel lecture id: ${selectedLecture}`);
        const res = await axios.post('http://136.243.156.120:32402/api/approve', JSON.stringify(lectureToSend), { headers: {'Authorization': token} })
    if (res.status === 200){
        console.log('ok');
    }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
    }
},

async delLecture(){

},

async getLecturesToApprove({commit, dispatch}){
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get('http://136.243.156.120:32402/api/approve', { headers: {'Authorization': token} })
        commit('addPendingLectures', res.data)
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
    }
}
    
}

const getters = {
    pendingLecturesGetter(state){
        return state.pendingLectures
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


// [
// 	{
// 		"descr": "granie z przegrywami",
// 		"eventname": "test1",
// 		"eventpersoncreator": "test2",
// 		"eventstartdate": "Sun, 24 Jan 2021 23:00:00 GMT",
// 		"eventstopdate": "Mon, 25 Jan 2021 11:40:00 GMT",
// 		"id": 8
// 	},
// 	{
// 		"descr": "testtest123",
// 		"eventname": "123",
// 		"eventpersoncreator": "123",
// 		"eventstartdate": "Thu, 31 Dec 2020 23:00:00 GMT",
// 		"eventstopdate": "Fri, 01 Jan 2021 14:29:00 GMT",
// 		"id": 10
// 	},
// 	{
// 		"descr": "opissssssss",
// 		"eventname": "testowy event",
// 		"eventpersoncreator": "Henioo",
// 		"eventstartdate": "Tue, 25 Jan 2022 23:00:00 GMT",
// 		"eventstopdate": "Sun, 30 Jan 2022 12:59:53 GMT",
// 		"id": 11
// 	}