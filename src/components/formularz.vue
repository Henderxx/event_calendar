<template>
  <form>
  <div class="mb-3">
    <label for="eventName" class="form-label">Nazwa wydarzenia</label>
    <input type="text" class="form-control text-center bg-dark text-white" v-model="eventName" id="eventName">
  </div>
  <div class="mb-3">
    <label for="eventCreator" class="form-label">Prowadzący</label>
    <input type="text" class="form-control text-center bg-dark text-white" v-model="eventCreator" id="eventCreator">
  </div>
  <div class="mb-3">
    <label for="eventDescription" class="form-label">Opis wydarzenia</label>
    <textarea rows="3" class="form-control bg-dark text-white" v-model="eventDescription" id="eventDescription"></textarea>
  </div>
  <div class="mb-3 row">
    <div class="col">
        <label for="startDate" class="form-label">Data rozpoczęcia</label>
          <v-date-picker v-model="startDate" mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
              <input id="startDate"
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 bg-dark text-white"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
    </div>
    <div class="col">
        <label for="endDate" class="form-label">Data zakończenia</label>
          <v-date-picker v-model="endDate" mode="dateTime" is24hr>
            <template v-slot="{ inputValue, inputEvents }">
              <input id="endDate"
                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 bg-dark text-white"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
    </div>

  </div>


  <button type="submit" class="btn btn-primary">Dodaj</button>
</form>
</template>

<script>

export default {
data(){
  return {
    startDate: '',
    endDate: '',
    eventName: '',
    eventCreator: '',
    eventDescription: ''
  }
}



}
</script>

<style lang="scss">
//
</style>