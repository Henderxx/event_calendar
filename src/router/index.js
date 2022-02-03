import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)


import confirmEvents from '../components/confirmEvents.vue'
import homePanel from '../views/homepanel.vue'
import Error404 from '../views/Error404.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: homePanel
    },
    {
        path: '/adminpanel',
        name: 'Adminpanel',
        component: confirmEvents
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/']
    const authRequired = !publicPages.includes(to.path)
    let loggedIn = store.state.auth.token
    let modal = document.querySelector('.modal')
      if(modal){
        let modalBack = document.querySelector('.modal-backdrop')
        if(modalBack){
          modalBack.remove()
          modal.remove()
        }
        
      }
  
    // after page refresh store data is lost, try auto login
    if (!loggedIn) {
      store.dispatch('auth/tryAutoLogin')
      loggedIn = store.state.auth.token
    }
  
    if (authRequired && !loggedIn) {
      return next('/')
    }
  
    next()
  })



  export default router