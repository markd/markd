import test from 'ava'
import Vue from 'vue'
import Vuex from 'vuex'
import Component from '../../src/components/SidebarItem.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'markd',
    pinned: [
      {
        icon: 'cloud_queue',
        name: 'All Bookmarks'
      },
      {
        icon: 'favorite_border',
        name: 'Favourite Bookmarks'
      }
    ],
    collections: [
      {
        colour: 'red',
        name: 'Web Development'
      },
      {
        colour: 'green',
        name: 'Spicy Memes'
      }
    ]
  }
})

const Mocked = Vue.extend(Component)

test('component renders', t => {
  let sidebarItem = new Mocked({
    propsData: {
      collection: {
        icon: 'folder',
        name: 'Some Folder'
      }
    },
    store
  }).$mount()

  const tree = {
    $el: sidebarItem.$el.outerHTML
  }
  t.snapshot(tree)
})

test('component displays right title', t => {
  let sidebarItem = new Mocked({
    propsData: {
      collection: {
        icon: 'cloud',
        name: 'Some Folder'
      }
    },
    store
  }).$mount()

  Vue.nextTick(() => {
    let icon = sidebarItem.$el.querySelectorAll('.sidebar__groupItemIcon')[0]
      .textContent

    t.is(icon, 'cloud')
  })
})

test('component displays right style', t => {
  let sidebarItem = new Mocked({
    propsData: {
      collection: {
        colour: 'red',
        name: 'Some Folder'
      }
    },
    store
  }).$mount()

  Vue.nextTick(() => {
    let icon = sidebarItem.$el.querySelectorAll('.sidebar__groupItemIcon')[0]
      .style

    t.is(icon, 'color: red')
  })
})

test('component displays right name', t => {
  let sidebarItem = new Mocked({
    propsData: {
      collection: {
        colour: 'red',
        name: 'Some Folder'
      }
    },
    store
  }).$mount()

  Vue.nextTick(() => {
    let icon = sidebarItem.$el.querySelectorAll('.sidebar__groupItemName')[0]
      .textContent

    t.is(icon, 'Some Folder')
  })
})
