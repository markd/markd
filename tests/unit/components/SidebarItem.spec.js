import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/SidebarItem.vue'

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
  }
})

describe('SidebarItem.vue', () => {
  const propsData = {
    route: 'folder',
    collection: {
      icon: 'folder',
      name: 'Some Folder',
      key: 'file'
    }
  }

  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router,
      propsData
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('display title', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router,
      propsData
    })

    expect(
      wrapper.find('.sidebar__groupItemIcon > use').attributes('href')
    ).toContain(propsData.collection.icon)
  })

  it('display color if no icon', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router,
      propsData: {
        ...propsData,
        collection: {
          ...propsData.collection,
          icon: undefined,
          colour: 'red'
        }
      }
    })

    expect(
      wrapper.find('.sidebar__groupItemIcon').attributes('style')
    ).toContain('color: red;')
  })

  it('display name', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router,
      propsData
    })

    expect(wrapper.find('.sidebar__groupItemName').text()).toBe(
      propsData.collection.name
    )
  })
})
