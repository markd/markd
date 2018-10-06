<template>
  <div class="sidebar__group pinned">
    <div class="sidebar__groupItems">
      <sidebar-item v-for="(pin, i) in pinned" :key="`pin-${i}`" :collection="pin" route="collection" />
    </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Pinned',
  components: {
    SidebarItem
  },
  computed: {
    pinned() {
      return this.$store.getters.pinned
    }
  }
}
</script>
