import { Card } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App.vue'

Vue.component(Card.name, Card)

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
