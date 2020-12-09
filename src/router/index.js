import Vue from 'vue'
import VueRouter from 'vue-router'
import Timeline from '@/pages/Timeline'
import Home from '@/pages/Home'
import Cadastro from '@/pages/Cadastro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {

    path: '/timeline',
    name: 'timeline',
    component: Timeline,
  },
  {

    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
