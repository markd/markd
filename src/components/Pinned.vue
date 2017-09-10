<template>
  <div class="sidebar__group pinned">
    <div class="sidebar__groupTitle">Pinned</div>
    <div class="sidebar__groupItems">
      <div class="sidebar__groupItem">
        <template v-for="(pin, i) in pinned">
          <i class="sidebar__groupItemIcon material-icons" v-text="pin.icon"></i>
          <div class="sidebar__groupItemName">{{pin.name }}</div>
        </template>
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

<style lang="scss">

</style>
