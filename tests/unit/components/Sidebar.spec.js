import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/Sidebar.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const title = 'markd'

const store = new Vuex.Store({
  state: {
    title,
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

describe('Sidebar.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('display title', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store
    })

    expect(wrapper.find('.sidebar__title').text()).toBe(title)
  })
})
