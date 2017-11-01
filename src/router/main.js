import Vue from 'vue'
import VueRouter from 'vue-router'

import AddView from '../components/views/AddView.vue'
import TagView from '../components/views/TagView.vue'
import CollectionView from '../components/views/CollectionView.vue'
import AllView from '../components/views/AllView.vue'
import FavouriteView from '../components/views/FavouriteView.vue'

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
},
{
  path: '/all',
  component: AllView
},
{
  path: '/favourites',
  component: FavouriteView
}
]

export const router = new VueRouter({
  routes
})
