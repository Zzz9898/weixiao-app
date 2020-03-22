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
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/register/Index'),
      meta: {
        showTabbar: false
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/pages/index/Index'),
      meta: {
        showTabbar: true
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
