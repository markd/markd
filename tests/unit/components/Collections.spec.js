import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/Collections.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

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
    getCollections: state => {
      return state.collections
    }
  }
})

describe('Collections.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('has proper childrens', () => {
    const wrapper = mount(Component, {
      localVue,
      store,
      router
    })

    const names = wrapper.findAll('.sidebar__groupItemName')

    expect(names.length).toBe(2)
    expect(names.at(0).text()).toBe(collectionOne)
    expect(names.at(1).text()).toBe(collectionTwo)
  })
})
