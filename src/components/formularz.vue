<template>
  <form>
  <div class="mb-3">
    <label for="eventName" class="form-label">Nazwa wydarzenia</label>
    <input type="text" class="form-control" id="eventName">
  </div>
  <div class="mb-3">
    <label for="eventCreator" class="form-label">Prowadzący</label>
    <input type="text" class="form-control" id="eventCreator">
  </div>
  <div class="mb-3">
    <label for="eventDescription" class="form-label">Opis wydarzenia</label>
    <input type="textarea" class="form-control" id="eventDescription">
  </div>
  <div class="mb-3">
    <label for="startDate" class="form-label">Data rozpoczęcia</label>
    <input type="text" class="form-control" id="startDate">
  </div>
  <div class="mb-3">
    <label for="endDate" class="form-label">Data zakończenia</label>
    <input type="text" class="form-control" id="endDate">
  </div>

  <button type="submit" class="btn btn-primary">Dodaj</button>
</form>
</template>

<script>
export default {
  

}
</script>

<style lang="scss">
//
</style>