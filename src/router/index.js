import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import TimerComponent from '../components/TimerComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TimerComponent
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
