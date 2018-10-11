import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/SidebarGroup.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

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
  }
})

describe('SidebarGroup.vue', () => {
  const propsData = {
    title: 'test'
  }

  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      propsData
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('display title', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      propsData
    })

    expect(wrapper.find('.sidebarGroup__title').text()).toBe(propsData.title)
  })
})
