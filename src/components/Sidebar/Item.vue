<template>
  <router-link :to="`/${route}`" class="sidebar__groupItem" active-class="sidebar__groupItem--active" :exact="true">
    <div class="sidebar__groupItemName">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar__groupItem {
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  user-select: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  display: block;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
    background: var(--sidebar-color-hover);
  }

  &--active,
  &--active:hover {
    color: var(--sidebar-color-active-text);
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
  font-size: 14px;
  line-height: 1;
  vertical-align: middle;
}
</style>
