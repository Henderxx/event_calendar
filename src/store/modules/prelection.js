import axios from 'axios'
import { base_path } from '../../config/config'

const state = {
    pendingPrelections: [],
    allPrelections: []

}

const mutations = {
    // addPendingLectures(state, data){
    //     state.pendingLectures = []

    //     for(const item of data){
    //         const pendingItem = {}
    //         const startDate = new Date(item.eventstartdate)
    //         const stopDate = new Date(item.eventstopdate)
    //         pendingItem.id = item.id
    //         pendingItem.startDate = startDate
    //         pendingItem.stopDate = stopDate
    //         pendingItem.name = item.eventname
    //         pendingItem.author = item.eventpersoncreator
    //         if(item.descr === null){
    //             pendingItem.description = ''
    //         } else {
    //             pendingItem.description = item.descr
    //         }

    //         state.pendingLectures.push(pendingItem)
    //     }
        
    // },

    setPrelections(state, data){
        state.allPrelections = []
        state.pendingPrelections = []

        for(const item of data ) {
            const prelection = {}
            prelection.id = item.id
            prelection.startDate = item.eventstopdate
            prelection.stopDate = item.eventstopdate
            prelection.author = item.eventpersoncreator
            prelection.name = item.eventname
                if(item.descr === null){
                    prelection.description = ''
                } else {
                    prelection.description = item.descr
                }
            prelection.approved = item.approved
            // prelection.contactEmail = item.email

            if(item.approved){
                state.allPrelections.push(prelection)
            } else {
                state.pendingPrelections.push(prelection)
            }
            
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
        //console.log(`sel lecture id: ${selectedLecture}`);
        const res = await axios.post(base_path + '/approve', lectureToSend, { headers: {'Authorization': token, 'Content-Type': 'application/json'} })
    if (res.status === 200){
        //console.log('ok');
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

async delPrelection({dispatch}, selectedLecture){
    const token = localStorage.getItem('token')
    // eslint-disable-next-line no-unused-vars
    const lectureToSend = {id: `${selectedLecture}`}
    try {
        const res = await axios.delete(base_path + '/approve', { headers: {'Authorization': token, 'Content-Type': 'application/json'}, data: lectureToSend })
    if (res.status === 200){
        //console.log('ok');
        dispatch('getPrelections')
       // dispatch('calEvents/getEvents',res.status,{root:true})
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

// async delApprovedLecture({dispatch}, selectedLecture){
//     const token = localStorage.getItem('token')
//     // eslint-disable-next-line no-unused-vars
//     const lectureToSend = {id: `${selectedLecture}`}
//     try {
//         const res = await axios.delete(base_path + '/remove', { headers: {'Authorization': token, 'Content-Type': 'application/json'}, data: lectureToSend })
//     if (res.status === 200){
//         dispatch('calEvents/getEvents',res.status,{root:true})
//     }
//     if(res.status === 403){
//         dispatch('auth/logout')
//     }
//     } catch (error) {
//         const errorMessage = (error.response.data && error.response.data.message) || error
//             dispatch('alert/error', errorMessage, { root: true })
//             console.log(JSON.parse(error));
//     }
// },

// async getLecturesToApprove({commit, dispatch}){
//     const token = localStorage.getItem('token')
//     try {
//         const res = await axios.get(base_path + '/approve', { headers: {'Authorization': token} })
//         commit('addPendingLectures', res.data)
//         if(res.status === 403){
//             dispatch('auth/logout')
//         }
//     } catch (error) {
//         const errorMessage = (error.response.data && error.response.data.message) || error
//             dispatch('alert/error', errorMessage, { root: true })
//             console.log(JSON.parse(error));
//     }
// }
    
}

const getters = {
    pendingPrelectionsGetter(state){
        return state.pendingLectures
    },

    allPrelectionsGetter(state){
        return state.allPrelections
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

