import Vue from 'vue'
import Router from 'vue-router'
import VuelingAdmin from '@/components/VuelingAdmin'
import PageOne from '@/components/PageOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VuelingAdmin',
      component: VuelingAdmin
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    }
  ]
})
