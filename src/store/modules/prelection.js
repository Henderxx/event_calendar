import axios from 'axios'
import { base_path } from '../../config/config'

const state = {
    Prelections: [],
    calendarEvents: [],

}

const mutations = {

    setPrelections(state, data){
        state.Prelections = []
        state.calendarEvents = []

        for(const item of data ) {
            const prelection = {}
            prelection.id = item.id
            const startDate = new Date(item.eventstartdate)
            const startYear = startDate.getFullYear().toString()
            const startDay = startDate.getDate().toString()
            const startMonth = startDate.getMonth() + 1
            const startHour =startDate.getHours().toString()
            const startMinute = startDate.getMinutes().toString()
            const startTime = `${startYear}-${startMonth.toString().padStart(2, '0')}-${startDay.padStart(2, '0')} ${startHour}:${startMinute.padStart(2, '0')}`

            const stopDate = new Date(item.eventstopdate)
            const stopYear = stopDate.getFullYear().toString()
            const stopDay = stopDate.getDate().toString()
            const stopMonth = stopDate.getMonth() + 1
            const stopHour =stopDate.getHours().toString()
            const stopMinute = stopDate.getMinutes().toString()
            const stopTime = `${stopYear}-${stopMonth.toString().padStart(2, '0')}-${stopDay.padStart(2, '0')} ${stopHour}:${stopMinute.padStart(2, '0')}`
            //console.log(startYear);
            prelection.startDate = startTime
            prelection.stopDate = stopTime
            prelection.author = item.eventpersoncreator
            prelection.name = item.eventname
                if(item.descr === null){
                    prelection.description = ''
                } else {
                    prelection.description = item.descr
                }
            prelection.approved = item.approved
            prelection.contactEmail = item.email

            if(item.approved){
                const calendarEvent = {}
                    calendarEvent.start = item.eventstartdate
                    calendarEvent.end = item.eventstopdate
                    calendarEvent.title = item.eventname
                    calendarEvent.content = item.descr || ''
                    calendarEvent.class = 'prelection'
                    calendarEvent.deletable = false
                    calendarEvent.resizable = false
                    calendarEvent.draggable = false

                state.calendarEvents.push(calendarEvent)
            } 

            state.Prelections.push(prelection)
            
        }
    }

}

const actions = {

async getPrelections({commit,dispatch}){
    try {
        const res = await axios.get(base_path + '/list')
        if(res.status === 200){
            commit('setPrelections', res.data)
        }
    } catch (error) {
        const errorMessage = (error.message && error.state) || error
        dispatch('alert/error', errorMessage, { root: true })
        console.log(error);
    }
},

async addPrelection({dispatch}, eventData){
    try {
        const req = await axios.post(base_path + '/eventadd', eventData)
        if (req.status === 200) {
            dispatch('alert/success', req.statusText, {root: true})
            dispatch('getPrelections')
        }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
    }
},

async approvePrelection({dispatch},selectedLecture) {
    const token = localStorage.getItem('token')
    const lectureToSend = {id: `${selectedLecture}`}
    try {
        const res = await axios.post(base_path + '/approve', lectureToSend, { headers: {'Authorization': token, 'Content-Type': 'application/json'} })
    if (res.status === 200){
        dispatch('getPrelections')
        //dispatch('calEvents/getEvents',res.status,{root:true})
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

async delPrelection({dispatch}, data){
    const token = localStorage.getItem('token')
    const lectureToSend = {id: data.id, msg: data.reason}
    try {
        const req = await axios.delete(base_path + '/approve', { headers: {'Authorization': token, 'Content-Type': 'application/json'}, data: lectureToSend })
    if (req.status === 200){
        dispatch('getPrelections')
        dispatch('alert/success', req.statusText, {root: true})
    }
    if(req.status === 403){
        dispatch('auth/logout')
    }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(JSON.parse(error));
    }
},

async updatePrelection({dispatch}, data){
    const token = localStorage.getItem('token')
    try {
        const req = await axios.put(base_path + '/approve', data, { headers: {'Authorization': token, 'Content-Type': 'application/json'} } )
        if (req.status === 200){
            dispatch('alert/success', req.statusText, {root: true})
        }
        if(req.status === 403){
            dispatch('auth/logout')
        }
    } catch (error) {
        const errorMessage = (error.response.data && error.response.data.message) || error
            dispatch('alert/error', errorMessage, { root: true })
    }
}
    
}

const getters = {
    prelectionsGetter(state){
        return state.Prelections
    },

   calendarEventsGetter(state){
        return state.calendarEvents
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

