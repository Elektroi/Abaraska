import Vue from 'vue'
import Router from 'vue-router'

import MainBody from '@/components/mainbody/MainBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainBody',
      component: MainBody
    }
  ]
})
