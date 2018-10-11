import Vue from 'vue'
import App from './App.vue'

import './assets/scss/styles.scss'
import { store } from './store/store'
import { router } from './router/router'

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
