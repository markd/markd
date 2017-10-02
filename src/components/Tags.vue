<template>
  <div class="sidebar__group tags">
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
    name: 'Tags',
    components: {
      SidebarItem
    },
    computed: {
      collections () {
        return this.$store.getters.getTags
      }
    }
  }
</script>
