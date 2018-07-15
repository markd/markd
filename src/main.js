import Vue from 'vue'
import App from './App.vue'

import './assets/scss/styles.scss'
import { store } from './store/store'
import { router } from './router/router'

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols
const app = new Vue({
  components: { App },
  el: '#app',
  template: '<App/>',
  store,
  router
})
