import test from 'ava'
import Vue from '../../node_modules/vue/dist/vue.min.js'
import Vuex from 'vuex'
import Component from '../../src/components/Sidebar.vue'

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

test('component renders', t => {
  let sidebar = new Mocked({
    store
  }).$mount()

  const tree = {
    $el: sidebar.$el.outerHTML
  }
  t.snapshot(tree)
})

test('shows right title', t => {
  let sidebar = new Mocked({
    store
  }).$mount()

  let componentTitle = sidebar.$el.querySelectorAll('.sidebar__title')[0].textContent

  t.is(componentTitle, 'markd')
})
