<template>
    <div class="container">
        <h2 class="fw-bold text-white my-4 pb-3"> Zatwierdzanie zdarzeń</h2>
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
            <tbody v-if="prelections.length" class="align-middle">
                <tr v-for="(pendingPrelection, index) of prelections" :key="pendingPrelection.id">
                    <template v-if="!pendingPrelection.approved">
                        <td>{{index + 1 }}</td>
                        <td>{{pendingPrelection.startDate}}</td>
                        <td>{{pendingPrelection.stopDate}}</td>
                        <td>{{pendingPrelection.name}}</td>
                        <td>{{pendingPrelection.author}}</td>
                        <td>{{pendingPrelection.description}}</td>
                        <td>
                            <button class="btn btn-success" v-on:click="approvePrelection(pendingPrelection.id)">Zatwierdź</button>
                            <!-- <button class="btn btn-danger" v-on:click="delPrelection(pendingPrelection.id)">Usuń</button> -->
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
            <div v-if="!prelections.length" class="bg-warning text-center text-black mb-3 rounded-1 py-2">
                nie ma żadnych eventów do zatwierdzenia
            </div>
    <button class=" w-100 btn btn-outline-info" v-on:click="getPrelections">pobierz zdarzenia</button>

    <h2 class="fw-bold text-white my-4 py-3"> Podgląd wszystkich zdarzeń</h2>
    <upcoming-events class="pt-1"></upcoming-events>
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
    //     pendingPrelectionId: ''
    // },

computed: {
    ...mapState('alert',{
        alert: state=> state.alert
    }),
    ...mapGetters('prelection',{
        prelections: 'prelectionsGetter'
    }),

},

methods: {
    ...mapActions('prelection',{
        getPrelections: 'getPrelections',
        approvePrelection: 'approvePrelection',
        delPrelection: 'delPrelection'
    }),
    
},

mounted(){
    this.getPrelections()
}
}
</script>

<style lang="scss">
    //
</style>>

