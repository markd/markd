<template>
  <div class="sidebarGroup">
    <h2 class="sidebarGroup__title" v-text="title"></h2>
    <div class="sidebarGroup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'SidebarGroup',
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .sidebarGroup__title {
    user-select: none;
    color: var(--sidebar-title-color);
    line-height: 1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 24px 12px 4px;
  }
</style>
