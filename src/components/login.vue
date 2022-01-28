<template>
  <form class="" @submit.prevent="onSubmit">
    <div class="form-floating mb-3">
      <input type="text" class="form-control rounded-4 bg-dark text-white" id="floatingInput" placeholder="Login" v-model="loginUser">
      <label for="floatingInput">Login</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control rounded-4 bg-dark text-white" id="floatingPassword" placeholder="Hasło" v-model="password">
      <label for="floatingPassword">Hasło</label>
    </div>
    <button type="submit" class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" >Zaloguj</button>
    <small class="text-muted">Logując się wkraczasz na nieznane dotąd miejsca ...</small>
    <hr class="my-4">
      <div v-if="alert.message" >
        <div v-if="alert.type === 'success'" class="p-2 my-3 bg-success text-white rounded-3">
          <p class="align-self-center">Zalogowano</p>
        </div>
        <div v-if="alert.type === 'error'" class="p-2 my-3 bg-danger text-white rounded-3">
          <p class="align-self-center">Błąd podczas logowania</p>
        </div>
          
      </div>
  </form>
</template>

<script>
import {mapState, mapActions } from 'vuex'
import FormData from 'form-data'


export default {
  data() {
    return {
      loginUser: '',
      password: ''
    }
  },

  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },

  methods: {
    ...mapActions('auth', {
      login: 'login'
    }),

    onSubmit(){
      const form = new FormData()

      form.append('login', this.loginUser)
      form.append('haslo', this.password)
      // const formData = {
      //   login: this.loginEmail,
      //   haslo: this.password
      // }
      this.login(form)
    }
  },

}
</script>

<style lang="scss">

</style>