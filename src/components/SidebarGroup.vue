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
  .sidebarGroup {
    padding: 24px 16px 16px;
  }

  .sidebarGroup__title {
    user-select: none;
    color: #cccccc;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 12px;
    margin: 0 0 5px;
  }
</style>
