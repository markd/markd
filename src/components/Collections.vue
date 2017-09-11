<template>
  <div class="sidebar__group collections">
    <div class="sidebar__groupItems">
      <div v-for="(collection, i) in collections" class="sidebar__groupItem">
        <i class="sidebar__groupItemIcon material-icons" :style="`color: ${collection.colour}`">
          brightness_1
        </i>
        <div class="sidebar__groupItemName">{{ collection.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Collections',
    data () {
      return {
        collections: this.$store.state.collections
      }
    }
  }
</script>
