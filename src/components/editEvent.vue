<template>
<table class="table bg-secondary mb-0">
    <thead class="text-white">
        <th>id</th>
        <th>Data rozpoczęcia</th>
        <th>Data zakończenia</th>
        <th>Nazwa prelekcji</th>
        <th>Prowadzacy</th>
        <th>Opis</th>
        <th>Kontakt</th>
        <th>Akcje</th>
    </thead>
    <tbody>
        <tr class="align-middle text-white">
            <td>{{pendingEventIdx + 1}}</td>
            <td> <v-date-picker v-model="startDate" mode="dateTime" is24hr :model-config="modelConfig" :min-date="new Date()" >
              <template v-slot="{ inputValue, inputEvents }">
                <input 
                  class="border rounded bg-dark text-white"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </v-date-picker></td>
            <td><v-date-picker v-model="stopDate" mode="dateTime" is24hr :model-config="modelConfig" :min-date="new Date()" >
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="border rounded bg-dark text-white"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </v-date-picker></td>
            <td><input class=" border rounded bg-dark text-white" type="text" :placeholder="pendingEvent.name" v-model="name"></td>
            <td><input class=" border rounded bg-dark text-white" type="text" :placeholder="pendingEvent.author" v-model="author" ></td>
            <td><input class=" border rounded bg-dark text-white" type="textarea" :placeholder="pendingEvent.description" v-model="description"></td>
            <td><input class=" border rounded bg-dark text-white" type="email" :placeholder="pendingEvent.contactEmail" v-model="email"></td>
            <td>
                <span><button class="btn btn-success" type="button" data-bs-toggle="collapse" :data-bs-target="`#row${pendingEventIdx + 1}`" @click.prevent="sendUpdatedPrelection()">Zapisz</button></span>
                <span><button class="btn btn-danger" type="button" data-bs-toggle="collapse" :data-bs-target="`#row${pendingEventIdx + 1}`" >Anuluj</button></span>
                <slot name="button"></slot>
            </td>
        </tr>
    </tbody>

</table>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            startDate: this.pendingEvent.startDate,
            stopDate: this.pendingEvent.stopDate,
            name: this.pendingEvent.name,
            author: this.pendingEvent.author,
            description: this.pendingEvent.description,
            email: this.pendingEvent.contactEmail,


            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD HH:mm'
            }
        }
    },
    props: {
        pendingEvent: Object,
        pendingEventIdx: Number
    },

  methods: {

    ...mapActions('prelection', {
      updatePrelection: 'updatePrelection'
    }),

    sendUpdatedPrelection(){
      const data = {}

        data.descr = this.description,
        data.email = this.email, 
        data.eventname = this.name,
        data.eventpersoncreator = this.author,
        data.eventstartdate = this.startDate,
        data.eventstopdate = this.stopDate,
        data.id = this.pendingEvent.id
    
       this.updatePrelection(data)
       
    }
  }

}
</script>

<style lang ="scss">

</style>