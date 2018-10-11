<template>
  <div class="sidebarGroup">
    <h2 
      class="sidebarGroup__title" 
      v-text="title"/>
    <div class="sidebarGroup__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarGroup',
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarGroup__title {
  user-select: none;
  color: var(--sidebar-title-color);
  line-height: 1;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 100;
  padding: 24px 12px 4px;
}
</style>
