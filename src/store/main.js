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
      { colour: 'green', name: 'Spicy Memes', active: false },
      { colour: 'black', name: 'Devcord', active: false },
      { colour: 'orange', name: 'Markd.it', active: false }
    ],
    tags: [
      { icon: 'hash', name: 'reads', active: false },
      { icon: 'hash', name: 'blog', active: false },
      { icon: 'hash', name: 'news', active: false },
      { icon: 'hash', name: 'design', active: false },
      { icon: 'hash', name: 'coding', active: false },
      { icon: 'hash', name: 'memes', active: false },
      { icon: 'hash', name: 'cats', active: false }
    ]
  }
})
