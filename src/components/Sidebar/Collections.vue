<template>
  <div class="sidebar__group collections">
    <div class="sidebar__groupItems">
      <sidebar-item v-for="(collection, i) in collections" :key="`collection-${i}`" :route="`collection/${collection.id}`">{{ collection.name }}</sidebar-item>
    </div>
  </div>
</template>

<script>
import SidebarItem from './Item'

export default {
  name: 'Collections',
  components: {
    SidebarItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
