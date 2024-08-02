// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import { createApp } from 'vue'
import VueRouter from 'vue-router'

import Regist from '../components/Regist'

// Vue.use(Router)
createApp().use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/regist',
      name: 'RegistVue',
      component: Regist
    },
  ]
})
