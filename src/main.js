import Vue from 'vue'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
