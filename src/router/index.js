import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Center from '@/view/Center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
  ]
})
