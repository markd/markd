<template>
  <div id="app" :class="theme">
    <Sidebar></Sidebar>
    <main class="content">
      <navigation />
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
        theme: this.$store.state.theme
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/styles.scss";

  #app {
    color: var(--app-color);
    display: grid;
    font-family: var(--font-stack);
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
