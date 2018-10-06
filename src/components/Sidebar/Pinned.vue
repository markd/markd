<template>
  <div class="sidebar__group pinned">
    <div class="sidebar__groupItems">
      <sidebar-item v-for="(pin, i) in items" :key="`pin-${pin.key}`" :route="`collection/${pin.key}`">{{ pin.name }}</sidebar-item>
    </div>
  </div>
</template>

<script>
import SidebarItem from './Item.vue'

export default {
  name: 'Pinned',
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
