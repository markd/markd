import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/App.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

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
  },
  actions: {
    initialLoad() {}
  }
})

describe('App.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router
    })
    expect(wrapper).toMatchSnapshot()
  })
})
