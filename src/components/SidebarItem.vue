<template>
  <div class="sidebar__groupItem">
    <i v-if="isIcon" class="sidebar__groupItemIcon material-icons" v-text="collection.icon"></i>
    <i v-else="isIcon" class="sidebar__groupItemIcon material-icons" :style="this.style">
      brightness_1
    </i>
    <div class="sidebar__groupItemName">{{ collection.name }}</div>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      collection: {
        type: Object,
        required: true
      }
    },
    computed: {
      isIcon () {
        return !!this.collection.icon
      },
      style () {
        return this.collection.colour ? `color: ${this.collection.colour};` : 'color: slategrey;'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar__groupItem {
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
    padding: 4px;
    &:hover {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    }
  }

  .sidebar__groupItemIcon {
    color: #bbbbbb;
    font-size: 20px;
    padding-right: 2px;
    line-height: 20px;
    vertical-align: middle;
  }

  .sidebar__groupItemName {
    display: inline;
    color: var(--font-color);
    font-size: 20px;
    line-height: 20px;
    vertical-align: middle;
  }
</style>
