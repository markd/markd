import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/Navigation.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

const store = new Vuex.Store()

describe('Navigation.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      router
    })

    expect(wrapper).toMatchSnapshot()
  })
})
