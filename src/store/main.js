import Vue from 'vue'
import Vuex from 'vuex'
import { title } from '../data'
import db from '../database'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    title,
    pinned: [
    ],
    collections: [
    ],
    tags: [
    ]
  },
  getters: {
    getPinned: state => {
      return state.pinned
    },
    getCollections: state => {
      return state.collections
    },
    getTags: state => {
      return state.tags
    }
  },
  mutations: {
    setPinned: (state, newPinned) => {
      state.pinned = newPinned
    },
    setCollections: (state, newCollections) => {
      state.collections = newCollections
    },
    setTags: (state, newTags) => {
      state.tags = newTags
    }
  },
  actions: {
    async initialLoad ({ commit }) {
      try {
        let collections = await db.collections.where('pinned').equals('false').toArray()
        commit('setCollections', collections)
      } catch (err) {
        console.error("Couldn't load collections", err)
      }

      try {
        let pinned = await db.collections.where('pinned').equals('true').toArray()
        commit('setPinned', pinned)
      } catch (err) {
        console.error("Couldn't load pinned", err)
      }

      try {
        let tags = await db.tags.toArray()
        commit('setTags', tags)
      } catch (err) {
        console.error("Couldn't load tags", err)
      }
    }
  }
})
