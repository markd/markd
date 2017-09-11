<template>
  <div class="sidebar__group pinned">
    <div class="sidebar__groupItems">
      <div v-for="(pin, i) in pinned" class="sidebar__groupItem">
        <i class="sidebar__groupItemIcon material-icons" v-text="pin.icon"></i>
        <div class="sidebar__groupItemName">{{ pin.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pinned',
    data () {
      return {
        pinned: this.$store.state.pinned
      }
    }
  }
</script>
