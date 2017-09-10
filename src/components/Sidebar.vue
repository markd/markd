<template>
  <div class="sidebar">
    <div class="title">
      <h1>{{ title | cap }}</h1>
    </div>
    <div class="sidebar-content">
      <pinned></pinned>
      <groups></groups>
    </div>
  </div>
</template>

<script>
  import Pinned from './Pinned.vue'
  import Groups from './Groups.vue'
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Sidebar',
    components: {
      Pinned,
      Groups
    },
    filters: {
      cap (val) {
        return val.toUpperCase()
      }
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
    background-color: #f9f9f9;
    // gradient
    // background: linear-gradient(135.04deg, #FFAA85 -24.81%, #B3315F 121.89%);

    .title {
      margin-top: 24px;
      margin-left: 18px;

      h1 {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 26px;
        width: auto;
        color: #424242;
      }
    }
  }
</style>
