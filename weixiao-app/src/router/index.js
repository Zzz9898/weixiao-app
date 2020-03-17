import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/login/Index'),
      meta: {
        showTabbar: false
      }
    },
    {
      path: '/success',
      name: 'Success',
      component: () => import('@/components/Example'),
      meta: {
        showTabbar: true
      }
    }
  ]
})
