<template>
  <div class="sidebarGroup">
    <h2 class="sidebarGroup__title">{{title}}</h2>
    <div class="sidebarGroup__content">
      {{children}}
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
    color: #CCCCCC;
    font-size: 12px;
    margin: 0 0 16px;
  }
</style>
