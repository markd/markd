import Vue from 'vue'
import Vuex from 'vuex'
import { title } from '../data'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    title,
    theme: 'dark',
    pinned: [
      { icon: 'cloud_queue', name: 'All Bookmarks' },
      { icon: 'favorite_border', name: 'Favourite Bookmarks' }
    ],
    collections: [
      { colour: 'red', name: 'Web Development' },
      { colour: 'green', name: 'Spicy Memes' }
    ]
  }
})
