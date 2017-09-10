<template>
  <div id="app" class="light">
    <Sidebar></Sidebar>
    <main class="content">
      <Navigation />
    </main>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import Navigation from './components/Navigation.vue'
  export default {
    components: {
      Sidebar,
      Navigation
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

  .content {
    background: #fff;
    display: flex;
    grid-area: content;
    min-height: 100vh;
  }
</style>
