import Vue from 'vue'
import VueRouter from 'vue-router'

import AddView from '../components/views/AddView.vue'
import TagView from '../components/views/TagView.vue'
import CollectionView from '../components/views/CollectionView.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/add',
  component: AddView
},
{
  path: '/tag/:tag',
  component: TagView
},
{
  path: '/collection/:collection',
  component: CollectionView
}
]

export const router = new VueRouter({
  routes
})
