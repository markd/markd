<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__title">{{ title }}</h1>
    </div>
    <hr class="sidebar__separator"/>
    <div class="sidebar__content">
      <sidebar-group title="Pinned">
        <pinned></pinned>
      </sidebar-group>
      <hr class="sidebar__separator"/>
      <sidebar-group title="Collections">
        <collections></collections>
      </sidebar-group>
    </div>
  </div>
</template>

<script>
  import Pinned from './Pinned.vue'
  import Collections from './Collections.vue'
  import SidebarGroup from './SidebarGroup.vue'
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Sidebar',
    components: {
      SidebarGroup,
      Pinned,
      Collections
    },
    data () {
      return {
        title: this.$store.state.title,
        bookmarks: this.$store.state.bookmarks
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    grid-area: sidebar;
    min-height: 100vh;
    background: linear-gradient(135.04deg, #ffaa85 -21.57%, #b3315f 121.89%), #f9f9f9;
    border-right: 1px solid #e0e0e0;
  }

  .sidebar__header {
    /*background-color: #e0e0e0;*/
    padding: 16px;
  }

  .sidebar__title {
    user-select: none;
    cursor: context-menu;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 26px;
    margin: 0;
    text-transform: uppercase;
    width: auto;
  }

  .sidebar__separator {
    background-color: transparent;
    border: 0;
    height: 1px;
    margin: 0;
  }
</style>
