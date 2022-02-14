import axios from "axios";
import { base_path } from "../../config/config";

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
    // clearCalendar(state){
    //     state.calendarEvents = []
    // },
    addCalendarEvents(state, data) {
        state.calendarEvents = []
        for(const item of data ) {
            if(!item.approved) continue
            const newItem = {}
            const isoDateStart = new Date(item.eventstartdate)
            const isoDateStop = new Date(item.eventstopdate)
            
            newItem.start = isoDateStart
            newItem.end = isoDateStop
            newItem.title = item.eventname
            if(item.descr === null){
                newItem.content = ''
            } else {
                newItem.content = item.descr.slice(0,200) + '...'
            }
            
            newItem.class = 'prelection'
            newItem.deletable = false
            newItem.resizable = false
            newItem.draggable = false
        
            state.calendarEvents.push(newItem)
        }
    }
}


const actions = {
    async getEvents({commit, dispatch}) {
        try {
            const res = await axios.get(base_path + '/list')
            //const res = await axios.get('http://192.168.0.150:32402/api/list')
            commit('saveEvents',res.data )
            commit('addCalendarEvents', res.data)
            console.log('get ok');
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