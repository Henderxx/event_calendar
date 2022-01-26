import axios from "axios";

const state = {
_events: '',
calendarEvents: [],
}
// start: '2022-01-20 14:00',
// end: '2022-01-20 17:30',
// title: 'Boring event',
// content: 'I am not draggable, not resizable and not deletable.',
// class: 'blue-event',
// deletable: false,
// resizable: false,
// draggable: false
const mutations = {
    saveEvents(state, EventData) {
        state._events = EventData
    },
    addCalendarEvents(state, data) {
    
        for(const item of data ) {
            const newItem = {}
            const isoDateStart = item.eventstartdate
            const isoDatestop = item.eventstopdate
            newItem.start = isoDateStart
            newItem.end = isoDatestop
            newItem.title = item.eventname
            if(item.descr === null){
                newItem.content = ''
            } else {
                newItem.content = item.descr.slice(0,200) + '...'
            }
            
            newItem.class = 'blue-event'
            newItem.deletable = false
            newItem.resizable = false
            newItem.draggable = false
        
            state.calendarEvents.push(newItem)
        }
    }
}

// descr:null
// eventname:"test3"
// eventpersoncreator:"Damian"
// eventstartdate:"Fri, 31 Dec 2021 23:00:00 GMT"
// eventstopdate:null

const actions = {
    async getEvents({commit, dispatch}) {
        try {
            const res = await axios.get('http://136.243.156.120:32402/api/list')
            //const res = await axios.get('http://192.168.0.150:32402/api/list')
            commit('saveEvents',res.data )
            commit('addCalendarEvents', res.data)
        } catch (error) {
            const errorMessage = (error.message && error.state) || error
            dispatch('alert/error', errorMessage, { root: true })
            console.log(error);
        }
    }
}

const getters = {
    eventsGetter(state) {
        return state._events
    },
    calendarEventsGet(state){
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