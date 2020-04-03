// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from './store'
import 'vant/lib/index.css'
import animated from 'animate.css'
import socket from '@/utils/socket'

Vue.use(Vant)
Vue.use(animated)
Vue.config.productionTip = false
Vue.prototype.socket = socket

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
