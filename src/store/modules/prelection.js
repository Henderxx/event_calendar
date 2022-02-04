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
        //const req = await axios.post('http://136.243.156.120:32402/api/eventadd', eventData)
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
        //console.log(`sel lecture id: ${selectedLecture}`);
        const res = await axios.post('http://136.243.156.120:32402/api/approve', lectureToSend, { headers: {'Authorization': token, 'Content-Type': 'application/json'} })
    if (res.status === 200){
        //console.log('ok');
        dispatch('getLecturesToApprove')
        dispatch('calEvents/getEvents',res.status,{root:true})
    }
    if(res.status === 403){
        dispatch('auth/logout')
    }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(JSON.parse(error));
    }
},

async delLecture({dispatch}, selectedLecture){
    const token = localStorage.getItem('token')
    // eslint-disable-next-line no-unused-vars
    const lectureToSend = {id: `${selectedLecture}`}
    try {
        const res = await axios.delete('http://136.243.156.120:32402/api/approve', { headers: {'Authorization': token, 'Content-Type': 'application/json'}, data: lectureToSend })
    if (res.status === 200){
        //console.log('ok');
        dispatch('getLecturesToApprove')
        dispatch('calEvents/getEvents',res.status,{root:true})
    }
    if(res.status === 403){
        dispatch('auth/logout')
    }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(JSON.parse(error));
    }
},

async delApprovedLecture({dispatch}, selectedLecture){
    const token = localStorage.getItem('token')
    // eslint-disable-next-line no-unused-vars
    const lectureToSend = {id: `${selectedLecture}`}
    try {
        const res = await axios.delete('http://136.243.156.120:32402/api/remove', { headers: {'Authorization': token, 'Content-Type': 'application/json'}, data: lectureToSend })
    if (res.status === 200){
        dispatch('calEvents/getEvents',res.status,{root:true})
    }
    if(res.status === 403){
        dispatch('auth/logout')
    }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(JSON.parse(error));
    }
},

async getLecturesToApprove({commit, dispatch}){
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get('http://136.243.156.120:32402/api/approve', { headers: {'Authorization': token} })
        commit('addPendingLectures', res.data)
        if(res.status === 403){
            dispatch('auth/logout')
        }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(JSON.parse(error));
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

