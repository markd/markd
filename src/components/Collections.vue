<template>
  <div class="sidebar__group collections">
    <div class="sidebar__groupItems">
      <sidebar-item
        v-for="(collection, i) in collections"
        :key="`collection-${i}`"
        :collection="collection">
      </sidebar-item>
    </div>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem.vue'

  export default {
    name: 'Collections',
    components: {
      SidebarItem
    },
    computed: {
      collections () {
        return this.$store.getters.getCollections
      }
    }
  }
</script>
