import test from 'ava'
import Vue from '../../node_modules/vue/dist/vue.min.js'
import Vuex from 'vuex'
import Component from '../../src/components/SidebarGroup.vue'

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
  let sidebarGroup = new Mocked({
    propsData: {
      title: 'test'
    },
    store
  }).$mount()

  const tree = {
    $el: sidebarGroup.$el.outerHTML
  }
  t.snapshot(tree)
})

test('component displays right title', t => {
  let sidebarGroup = new Mocked({
    propsData: {
      title: 'test'
    },
    store
  }).$mount()

  Vue.nextTick(() => {
    let title = sidebarGroup.$el.querySelectorAll('.sidebarGroup__title')[0].textContent

    t.is(title, 'test')
  })
})
