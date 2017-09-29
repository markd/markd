<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__title">{{ title }}</h1>
      <button onclick="" class="sidebar__addBookmark">
        <svg class="sidebar__addBookmarkIcon">
          <use xlink:href="#icon-plus" />
        </svg>
      </button>
    </div>
    <div class="sidebar__content">
      <sidebar-group title="Pinned">
        <pinned></pinned>
      </sidebar-group>
      <sidebar-group title="Collections">
        <collections></collections>
      </sidebar-group>
      <sidebar-group title="Tags">
        <tags></tags>
      </sidebar-group>
    </div>
  </div>
</template>

<script>
  import Pinned from './Pinned.vue'
  import Collections from './Collections.vue'
  import Tags from './Tags.vue'
  import SidebarGroup from './SidebarGroup.vue'
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Sidebar',
    components: {
      SidebarGroup,
      Pinned,
      Collections,
      Tags
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
    border-right: 1px solid #333;
    grid-area: sidebar;
    min-height: 100vh;
    background: var(--sidebar-color);
  }

  .sidebar__header {
    align-items: center;
    background-color: var(--sidebar-color-dark);
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
  }

  .sidebar__addBookmark {
    background-color: var(--overlay);
    border: 0;
    cursor: pointer;
    height: 30px;
    padding: 9px;
    width: 30px;

    &:hover {
      background-color: rgba(0, 0, 0, .45);
    }
  }

  .sidebar__addBookmarkIcon {
    width: 12px;
    height: 12px;
    display: block;
    color: var(--font-color-invert);
  }

  .sidebar__title {
    user-select: none;
    cursor: context-menu;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    line-height: 1;
    margin: 0;
    width: auto;
  }
</style>
