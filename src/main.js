import { Card } from 'element-ui'

import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-default/index.css'
import './assets/scss/styles.scss'

import { store } from './store/main'

Vue.component(Card.name, Card)

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
