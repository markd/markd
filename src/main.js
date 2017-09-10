import Vue from 'vue'
import App from './App.vue'

import { store } from './store/main'

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols
const app = new Vue({
  components: { App },
  el: '#app',
  template: '<App/>',
  store
})
