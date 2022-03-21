<template>
    <div class="container-fluid table-responsive">
        <h2 class="fw-bold text-white my-4 pb-3"> Zatwierdzanie zdarzeń</h2>
        <table class="table table-dark  table-hover pt-4 mt-3">
            <thead class="table-light bg-light">
                <th>id</th>
                <th>Data rozpoczęcia</th>
                <th>Data zakończenia</th>
                <th>Nazwa prelekcji</th>
                <th>Prowadzacy</th>
                <th>Opis</th>
                <th>Kontakt</th>
                <th>Akcje</th>
            </thead>
            <tbody v-if="pendingEvents.length" class="align-middle">
                <template v-for="(pendingPrelection, index) of pendingEvents" >
                <tr :key="pendingPrelection.id">
                        <td>{{index + 1 }}</td>
                        <td>{{pendingPrelection.startDate}}</td>
                        <td>{{pendingPrelection.stopDate}}</td>
                        <td>{{pendingPrelection.name}}</td>
                        <td>{{pendingPrelection.author}}</td>
                        <td>{{pendingPrelection.description}}</td>
                        <td>{{pendingPrelection.contactEmail}}</td>
                        <td>
                            <button class="btn btn-success" v-on:click="approvePrelection(pendingPrelection.id)">Zatwierdź</button>
                            <button class="btn btn-warning" type="button" data-bs-toggle="collapse"  :data-bs-target="`#row${index + 1}`" >Edytuj</button>
                            <!-- <button class="btn btn-danger" v-on:click="delPrelection(pendingPrelection.id)">Usuń</button> -->
                        </td>
                </tr>
                <tr :key="index" :id="`row${index + 1}`" class="collapse pt-2">
                    <td colspan="8">
                        <edit-event :pendingEvent="pendingPrelection" :pendingEventIdx="index" >
                            <!-- <template v-slot:button>
                                <span><button class="btn btn-danger" type="button" data-bs-toggle="collapse" :data-bs-target="`#row${index + 1}`" >Anuluj</button></span>
                            </template> -->
                        </edit-event>
                    </td>
                </tr>
                </template>
            </tbody>
        </table>

        <div v-if="!pendingEvents.length" class="bg-warning text-center text-black mb-3 rounded-1 py-2">
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
import editEvent from '../components/editEvent.vue'

export default {
    components: {
        UpcomingEvents,
        editEvent,
    },
    // data (){
    //     return {
    
    //     }
    // },


computed: {
    ...mapState('alert',{
        alert: state=> state.alert
    }),
    ...mapGetters('prelection',{
        prelections: 'prelectionsGetter',
        pendingEvents: 'pendingEventsGetter'
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

