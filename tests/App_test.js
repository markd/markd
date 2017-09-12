import test from 'ava'
import Vue from '../node_modules/vue/dist/vue.min.js'
import Vuex from 'vuex'
import Component from '../src/App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'markd',
    pinned: [{
      icon: 'cloud_queue',
      name: 'All Bookmarks'
    },
    {
      icon: 'favorite_border',
      name: 'Favourite Bookmarks'
    }],
    collections: [{
      colour: 'red',
      name: 'Web Development'
    },
    {
      colour: 'green',
      name: 'Spicy Memes'
    }]
  }
})

const Mocked = Vue.extend(Component)

test('Main component renders', t => {
  let app = new Mocked({
    store
  }).$mount()

  const tree = {
    $el: app.$el.outerHTML
  }
  t.snapshot(tree)
})
