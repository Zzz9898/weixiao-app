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
      path: '/addcontent',
      name: 'AddContent',
      component: () => import('@/pages/content/Index'),
      meta: {
        showTabbar: false
      }
    },
    {
      path: '/addactivity',
      name: 'AddActivity',
      component: () => import('@/pages/activityadd/Index'),
      meta: {
        showTabbar: false
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('@/pages/chat/Index'),
      meta: {
        showTabbar: false
      }
    },
    {
      path: '/chatlist',
      name: 'ChatList',
      component: () => import('@/pages/chatlist/Index'),
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Index'),
      meta: {
        showTabbar: true
      }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: () => import('@/pages/activity/Index'),
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
