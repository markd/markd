<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__title">{{ title }}</h1>
      <router-link to="/add" class="sidebar__addBookmark">
        <svg class="sidebar__addBookmarkIcon">
          <use xlink:href="#icon-plus" />
        </svg>
      </router-link>
    </div>
    <div class="sidebar__content">
      <sidebar-group :title="strings.pinned">
        <pinned></pinned>
      </sidebar-group>
      <sidebar-group :title="strings.collections">
        <collections></collections>
      </sidebar-group>
      <sidebar-group :title="strings.tags">
        <tags></tags>
      </sidebar-group>
    </div>
  </div>
</template>

<script>
import __ from '../lib/translation'
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
  data() {
    return {
      title: this.$store.state.title
    }
  },
  computed: {
    strings() {
      const language = this.$store.getters.language
      console.log({
        pinned: __('Pinned', language),
        tags: __('Tags', language),
        collections: __('Collections', language)
      })
      return {
        pinned: __('Pinned', language),
        tags: __('Tags', language),
        collections: __('Collections', language)
      }
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
  border-radius: 4px;
  cursor: pointer;
  height: 30px;
  padding: 9px;
  width: 30px;

  &:hover {
    background-color: var(--overlay-hover);
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
