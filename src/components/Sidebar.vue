<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__title">{{ title }}</h1>
    </div>
    <hr class="sidebar__separator" />
    <div class="sidebar__content">
      <SidebarGroup title="Pinned items">
        <Pinned />
      </SidebarGroup>
      <hr class="sidebar__separator" />
      <SidebarGroup title="Your collections"></SidebarGroup>
    </div>
  </div>
</template>

<script>
  import Pinned from './Pinned.vue'
  import SidebarGroup from './SidebarGroup.vue'
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Sidebar',
    components: {
      SidebarGroup,
      Pinned
    },
    data () {
      return {
        title: this.$store.state.title,
        bookmarks: this.$store.state.bookmarks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    grid-area: sidebar;
    min-height: 100vh;
    background-color: #f9f9f9;
    border-right: 1px solid #e0e0e0;
  }

  .sidebar__header {
    background-color: #e0e0e0;
    padding: 16px;
  }

  .sidebar__title {
    color: #777;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    width: auto;
  }

  .sidebar__separator {
    background-color: #e0e0e0;
    border: 0;
    height: 1px;
    margin: 0;
  }
</style>
