import test from 'ava'
import Vuex from 'vuex'
import Vue from '../../node_modules/vue/dist/vue.min.js'
import Component from '../../src/components/Collections.vue'

Vue.use(Vuex)

const collectionOne = 'Web Development'
const collectionTwo = 'Spicy Memes'

const store = new Vuex.Store({
  state: {
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
        name: collectionOne
      },
      {
        colour: 'green',
        name: collectionTwo
      }
    ]
  },
  getters: {
    collections: state => {
      return state.collections
    }
  }
})

const Mocked = Vue.extend(Component)

test('Collections component renders', t => {
  let collections = new Mocked({
    store
  }).$mount()

  const tree = {
    $el: collections.$el.outerHTML
  }
  t.snapshot(tree)
})

test('Collections component shows proper children', t => {
  let collections = new Mocked({
    store
  }).$mount()

  let componentElementsOne = collections.$el.querySelectorAll(
    '.sidebar__groupItem'
  )[0]
  let componentElementsTwo = collections.$el.querySelectorAll(
    '.sidebar__groupItem'
  )[1]

  let collectionNameOne = componentElementsOne.querySelectorAll(
    '.sidebar__groupItemName'
  )[0].textContent
  let collectionNameTwo = componentElementsTwo.querySelectorAll(
    '.sidebar__groupItemName'
  )[0].textContent

  t.is(collectionNameOne, collectionOne)
  t.is(collectionNameTwo, collectionNameTwo)
})
