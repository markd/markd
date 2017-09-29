<template>
  <div class="sidebar__groupItem" :class="{ 'sidebar__groupItem--active': collection.active }">
    <svg v-if="isIcon" class="sidebar__groupItemIcon">
      <use :xlink:href="'#icon-' + collection.icon" />
    </svg>
    <svg v-else class="sidebar__groupItemIcon" :style="this.style">
      <use xlink:href="#icon-circle" />
    </svg>
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
    color: rgba(255, 255, 255, .45);
    cursor: pointer;
    user-select: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 12px;

    &:hover {
      color: rgba(255, 255, 255, .75);
      background: var(--sidebar-color-hover);
    }

    &--active,
    &--active:hover {
      color: var(--font-color-invert);
      background: var(--sidebar-color-active);
    }
  }

  .sidebar__groupItemIcon {
    color: var(--sidebar-icon-color);
    height: 16px;
    vertical-align: middle;
    width: 16px;
    margin-right: 4px;
  }

  .sidebar__groupItemName {
    display: inline;
    font-size: 16px;
    line-height: 1;
    vertical-align: middle;
  }
</style>
