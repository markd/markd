<template>
  <div class="sidebar__group tags">
    <div class="sidebar__groupItems">
      <sidebar-item v-for="(tag, i) in items" :key="`tag-${tag.key}`" :route="`tag/${tag.key}`">{{ tag.name }}</sidebar-item>
    </div>
  </div>
</template>

<script>
import SidebarItem from './Item.vue'

export default {
  name: 'Tags',
  components: {
    SidebarItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
