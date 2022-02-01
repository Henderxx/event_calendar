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
            <tbody>
                <tr v-for="(pendingLecture) of pendingLecturesGetter" :key="pendingLecture.id">
                    <td>{{pendingLecture.id}}</td>
                    <td>{{pendingLecture.startDate}}</td>
                    <td>{{pendingLecture.stopDate}}</td>
                    <td>{{pendingLecture.name}}</td>
                    <td>{{pendingLecture.author}}</td>
                    <td>{{pendingLecture.description}}</td>
                    <td>
                        <button class="btn btn-outline-success" v-on:click="approveLecture(pendingLecture.id)">Zatwierdź</button>
                    </td>
                </tr>
                
            </tbody>
        </table>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    // data (){
    //     pendingLectureId: ''
    // },

computed: {
    ...mapState('alert',{
        alert: state=> state.alert
    }),
    ...mapGetters('prelection',{
        pendingLecturesGetter: 'pendingLecturesGetter'
    })
},

methods: {
    ...mapActions('prelection',{
        getLecturesToApprove: 'getLecturesToApprove',
        approveLecture: 'approveLecture'
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

