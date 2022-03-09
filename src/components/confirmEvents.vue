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
            <tbody v-if="pendingEvents.length" class="align-middle">
                <template v-for="(pendingPrelection, index) of pendingEvents" >
                <tr :key="pendingPrelection.id">
                        <td>{{index + 1 }}</td>
                        <td>{{pendingPrelection.startDate}}</td>
                        <td>{{pendingPrelection.stopDate}}</td>
                        <td>{{pendingPrelection.name}}</td>
                        <td>{{pendingPrelection.author}}</td>
                        <td>{{pendingPrelection.description}}</td>
                        <td>
                            <button class="btn btn-success" v-on:click="approvePrelection(pendingPrelection.id)">Zatwierdź</button>
                            <button class="btn btn-warning" type="button" data-bs-toggle="collapse"  :data-bs-target="`#row${index + 1}`" >Edytuj</button>
                            <!-- <button class="btn btn-danger" v-on:click="delPrelection(pendingPrelection.id)">Usuń</button> -->
                        </td>
                </tr>
                <tr :key="index" :id="`row${index + 1}`" class="collapse">
                    <td colspan="7">
                        <edit-event>
                            <template v-slot:id>
                                {{index + 1}}
                            </template>
                            <template v-slot:startdate>
                                {{pendingPrelection.startDate}}
                            </template>
                            <template v-slot:stopdate>
                                {{pendingPrelection.stopDate}}
                            </template>
                            <template v-slot:name>
                                {{pendingPrelection.name}}
                            </template>
                            <template v-slot:author>
                                {{pendingPrelection.author}}
                            </template>
                            <template v-slot:description>
                                {{pendingPrelection.description}}
                            </template>
                            <template v-slot:button>
                                <span><button class="btn btn-danger" type="button" data-bs-toggle="collapse" :data-bs-target="`#row${index + 1}`" >Anuluj</button></span>
                            </template>
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
<!-- 
        <table>
            <tbody>
                <tr v-for="(item) of pendingEvents" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.startDate}}</td>
                    <td>{{item.stopDate}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.author}}</td>
                    <td>{{item.description}}</td>
                </tr>
            </tbody>
        </table> -->
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
    // watch: {
    //     pendingEvents: function(newEv,oldEv){
    //         this.pendingEvents = this.setPendingevents()
    //         console.log(newEv,oldEv);
            
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

    // setPendingevents(){
    //     this.pendingEvents = this.prelections.filter((x) => x.approved  != true)
    // }
    
},

mounted(){
    this.getPrelections()
    // this.setPendingevents()
}
}
</script>

<style lang="scss">
    //
</style>>

