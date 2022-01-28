import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

import App from '../App.vue'
import AdminPanel from '../components/adminpanel.vue'
import Login from '../components/login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/adminpanel',
        name: 'Adminpanel',
        component: AdminPanel
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/', '/login']
    const authRequired = !publicPages.includes(to.path)
    let loggedIn = store.state.auth.token
  
    // after page refresh store data is lost, try auto login
    // if (!loggedIn) {
    //   store.dispatch('auth/tryAutoLogin')
    //   loggedIn = store.state.auth.idToken
    // }
  
    if (authRequired && !loggedIn) {
      return next('/login')
    }
  
    next()
  })



  export default router