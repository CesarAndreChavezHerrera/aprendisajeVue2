import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Longitud from "../views/longitud.vue" //inicial mayuscula 
import Masa from '../components/Masa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/longitud',
    name: 'longitud',
    component: Longitud // debe ser letra mayuscula la inicial para que no se confunda esta tontera
  },
  {
    path: '/masa',
    name: 'Masa',
    component: Masa // debe ser letra mayuscula la inicial para que no se confunda esta tontera
  },
]

const router = new VueRouter({
  routes
})

export default router
