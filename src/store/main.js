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
    initialLoad: ({ commit }) => {
      db.collections.where('pinned')
        .equals('true')
        .toArray()
        .then(pinned => {
          commit('setPinned', pinned)
        }).catch(error => {
          console.error("Couldn't load pinned", error)
        })

      db.collections.where('pinned')
        .equals('false')
        .toArray()
        .then(collections => {
          commit('setCollections', collections)
        }).catch(error => {
          console.error("Couldn't load collections", error)
        })

      db.tags
        .toArray()
        .then(tags => {
          commit('setTags', tags)
        }).catch(error => {
          console.error("Couldn't load tags", error)
        })
    }
  }
})
