<template>
  <div class="sidebar__group tags">
    <div class="sidebar__groupItems">
      <sidebar-item v-for="(collection, i) in collections" :key="`collection-${i}`" :route="`tag/${collection.id}`">{{ collection.name }}</sidebar-item>
    </div>
  </div>
</template>

<script>
import SidebarItem from './Item.vue'

export default {
  name: 'Tags',
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
