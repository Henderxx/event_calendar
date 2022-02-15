<template>
  <form @submit.prevent="onSubmit">
  <div class="mb-3">
    <label for="eventName" class="form-label">Nazwa wydarzenia</label>
    <input type="text" class="form-control text-center bg-dark text-white" v-model="eventName" id="eventName" required>
  </div>
  <div class="mb-3">
    <label for="eventCreator" class="form-label">Prowadzący</label>
    <input type="text" class="form-control text-center bg-dark text-white" v-model="eventCreator" id="eventCreator" required>
  </div>
  <div class="mb-3">
    <label for="eventDescription" class="form-label">Opis wydarzenia</label>
    <textarea rows="3" class="form-control bg-dark text-white" v-model="eventDescription" id="eventDescription"></textarea>
  </div>
  <div class="mb-3 pb-3 row ">
    <div class="col">
        <label for="startDate" class="form-label">Data rozpoczęcia</label>
          <v-date-picker v-model="startDate" mode="dateTime" is24hr :model-config="modelConfig" :min-date="new Date()" :minute-increment="10">
            <template v-slot="{ inputValue, inputEvents }">
              <input required id="startDate"
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 bg-dark text-white"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
          {{startDate}}
    </div>
    <div class="col">
        <label for="endDate" class="form-label">Data zakończenia</label>
          <v-date-picker v-model="endDate" mode="dateTime" is24hr :model-config="modelConfig" :min-date="new Date()" :minute-increment="10">
            <template v-slot="{ inputValue, inputEvents }">
              <input required id="endDate"
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 bg-dark text-white"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
          {{endDate}}
    </div>
  </div>
      <div v-if="alert.message" >
        <div v-if="alert.type === 'success'" class="p-2 my-3 bg-success text-white rounded-3">
          <p class="align-self-center">Dodano wydarzenie</p>
        </div>
        <div v-if="alert.type === 'error'" class="p-2 my-3 bg-danger text-white rounded-3">
          <p class="align-self-center">Błąd podczas dodawania wydarzenia</p>
        </div>
          
      </div>

  <button type="submit" class="w-100 btn btn-primary">Dodaj</button>
</form>


</template>

<script>
import { mapActions, mapState } from 'vuex'
import FormData from 'form-data'

export default {
data(){
  return {
      startDate: '',
      endDate: '',
      eventName: '',
      eventCreator: '',
      eventDescription: '',

      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD HH:mm'
      }
  }
},

computed: {
  ...mapState({
    alert: state => state.alert
  })
},

methods: {
  ...mapActions('prelection', {
    addPrelection: 'addPrelection'
  }),

  onSubmit(){

    const formEvent = new FormData()
    formEvent.append('descr', this.eventDescription)
    formEvent.append('eventname', this.eventName)
    formEvent.append('eventpersoncreator', this.eventCreator)
    formEvent.append('eventstartdate', this.startDate)
    formEvent.append('eventstopdate', this.endDate)

    this.addPrelection(formEvent)
    
    this.eventDescription = '',
    this.eventName = '',
    this.eventCreator = '',
    this.startDate = '',
    this.endDate = ''
  },

}

}
</script>

<style lang="scss">
//
</style>