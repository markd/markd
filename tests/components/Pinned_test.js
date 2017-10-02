import test from 'ava'
import Vuex from 'vuex'
import Vue from '../../node_modules/vue/dist/vue.min.js'
import Component from '../../src/components/Pinned.vue'

Vue.use(Vuex)

const collectionOne = 'All Bookmarks'
const collectionTwo = 'Favourite Bookmarks'

const store = new Vuex.Store({
  state: {
    pinned: [
      {
        icon: 'cloud_queue',
        name: collectionOne
      },
      {
        icon: 'favorite_border',
        name: collectionTwo
      }],
    collections: [
      {
        colour: 'red',
        name: 'Web Development'
      },
      {
        colour: 'green',
        name: 'Spicy Memes'
      }]
  },
  getters: {
    getPinned: state => {
      return state.pinned
    }
  }
})

const Mocked = Vue.extend(Component)

test('Pinned component renders', t => {
  let pinned = new Mocked({
    store
  }).$mount()

  const tree = {
    $el: pinned.$el.outerHTML
  }
  t.snapshot(tree)
})

test('Pinned component shows proper children', t => {
  let pinned = new Mocked({
    store
  }).$mount()

  let componentElementsOne = pinned.$el.querySelectorAll(
    '.sidebar__groupItem')[0]
  let componentElementsTwo = pinned.$el.querySelectorAll(
    '.sidebar__groupItem')[1]

  let collectionNameOne = componentElementsOne.querySelectorAll(
    '.sidebar__groupItemName')[0].textContent
  let collectionNameTwo = componentElementsTwo.querySelectorAll(
    '.sidebar__groupItemName')[0].textContent

  t.is(collectionNameOne, collectionOne)
  t.is(collectionNameTwo, collectionTwo)
})
