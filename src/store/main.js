import Vue from 'vue'
import Vuex from 'vuex'
import { title } from '../data'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    title,
    pinned: [
      { icon: 'book', name: 'All Bookmarks', active: true },
      { icon: 'star', name: 'Favourite Bookmarks', active: false }
    ],
    collections: [
      { colour: 'red', name: 'Web Development', active: false },
      { colour: 'green', name: 'Spicy Memes', active: false }
    ]
  }
})
