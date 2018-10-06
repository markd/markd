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
      <sidebar-group>
        <sidebar-navigation></sidebar-navigation>
      </sidebar-group>
      <sidebar-group title="Pinned" v-if="pinnedItems.length > 0">
        <pinned :items="pinnedItems"></pinned>
      </sidebar-group>
      <sidebar-group title="Collections">
        <collections :items="collectionItems"></collections>
        <add
          label="Add Collection"
          :value="collectionInput"
          @input="setCollectionInput"
          @reset="resetCollectionInput"
        />
      </sidebar-group>
      <sidebar-group title="Tags">
        <tags :items="tagItems"></tags>
        <add
          label="Add Tag"
          :value="tagInput"
          @input="setTagInput"
          @reset="resetTagInput"
        />
      </sidebar-group>
    </div>
  </div>
</template>

<script>
import Add from './Add'
import Pinned from './Pinned'
import Collections from './Collections'
import Tags from './Tags'
import SidebarGroup from './Group'
import SidebarNavigation from './Navigation'

export default {
  name: 'Sidebar',
  components: {
    Add,
    Collections,
    Pinned,
    SidebarGroup,
    SidebarNavigation,
    Tags
  },
  data() {
    return {
      title: this.$store.state.title,
      collectionInput: '',
      tagInput: ''
    }
  },
  computed: {
    pinnedItems() {
      return this.$store.getters.getPinned
    },
    collectionItems() {
      return this.$store.getters.getCollections
    },
    tagItems() {
      return this.$store.getters.getTags
    }
  },
  methods: {
    setCollectionInput: function(val) {
      this.collectionInput = val
    },
    resetCollectionInput: function() {
      this.collectionInput = ''
    },
    setTagInput: function(val) {
      this.tagInput = val
    },
    resetTagInput: function() {
      this.tagInput = ''
    }
  }
}
</script>

<style lang="scss">
.sidebar {
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
