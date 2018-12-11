<template>
  <div class="sidebar__group navigation">
    <div class="sidebar__groupItems">
      <sidebar-item route="">All Bookmarks</sidebar-item>
      <sidebar-item route="favorites">Favorites</sidebar-item>
    </div>
  </div>
</template>

<script>
import SidebarItem from './Item'

export default {
  name: 'Navigation',
  components: {
    SidebarItem
  }
}
</script>
