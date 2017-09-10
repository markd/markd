<template>
  <div id="app" class="light">
    <sidebar></sidebar>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  export default {
    components: {
      Sidebar
    },
    name: 'App',
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">
  #app {
    display: grid;
    grid-template-columns:  256px 1fr;
    grid-template-areas: "sidebar content";
  }
</style>
