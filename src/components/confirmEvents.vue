<template>
    <div class="container">
        <table class="table table-dark table-striped table-hover pt-4 mt-3">
            <thead class="table-light bg-light">
                <th>id</th>
                <th>Data rozpoczęcia</th>
                <th>Data zakończenia</th>
                <th>Nazwa prelekcji</th>
                <th>Prowadzacy</th>
                <th>Opis</th>
                <th>Akcje</th>
            </thead>
            <div v-if="!pendingLecturesGetter.length">
                nie ma żadnych eventów do zatwierdzenia
            </div>
            <tbody v-if="pendingLecturesGetter.length">
                <tr v-for="(pendingLecture) of pendingLecturesGetter" :key="pendingLecture.id">
                    <td>{{pendingLecture.id}}</td>
                    <td>{{pendingLecture.startDate}}</td>
                    <td>{{pendingLecture.stopDate}}</td>
                    <td>{{pendingLecture.name}}</td>
                    <td>{{pendingLecture.author}}</td>
                    <td>{{pendingLecture.description}}</td>
                    <td>
                        <button class="btn btn-outline-success" v-on:click="approveLecture(pendingLecture.id)">Zatwierdź</button>
                        <button class="btn btn-danger" v-on:click="delLecture(pendingLecture.id)">Usuń</button>
                    </td>
                </tr>
                
            </tbody>
        </table>
    <button class=" w-100 btn btn-outline-info" v-on:click="getLecturesToApprove">pobierz zdarzenia</button>
    <upcoming-events class="mt-5 pt-5"></upcoming-events>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import UpcomingEvents from '../components/upcomingEvents.vue'

export default {
    components: {
        UpcomingEvents
    },
    // data (){
    //     pendingLectureId: ''
    // },

computed: {
    ...mapState('alert',{
        alert: state=> state.alert
    }),
    ...mapGetters('prelection',{
        pendingLecturesGetter: 'pendingLecturesGetter'
    }),
    ...mapGetters('calEvents',{
        eventsGetter: 'eventsGetter'
    })
},

methods: {
    ...mapActions('prelection',{
        getLecturesToApprove: 'getLecturesToApprove',
        approveLecture: 'approveLecture',
        delLecture: 'delLecture'
    }),
    
},

mounted(){
    this.getLecturesToApprove()
}
}
</script>

<style lang="scss">
    //
</style>>

