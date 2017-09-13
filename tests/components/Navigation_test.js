import test from 'ava'
import Vuex from 'vuex'
import Vue from '../../node_modules/vue/dist/vue.min.js'
import Component from '../../src/components/Navigation.vue'

Vue.use(Vuex)

const store = new Vuex.Store()

const Mocked = Vue.extend(Component)

test('Navigation component renders', t => {
  let navigation = new Mocked({
    store
  }).$mount()

  const tree = {
    $el: navigation.$el.outerHTML
  }
  t.snapshot(tree)
})
