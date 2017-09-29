<template>
  <div id="app" class="light">
    <sidebar></sidebar>
    <main class="content">
      <navigation />
    </main>
  </div>
</template>

<script>
  import db from './database'

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
    },
    created () {
      db.settings.each((setting) => {
        console.log(setting)
      })
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/styles.scss";

  #app {
    display: grid;
    grid-template-columns:  320px 1fr;
    grid-template-areas: "sidebar content";

    @media screen and (max-width: 800px) {
      grid-template-columns:  256px 1fr;
    }
  }

  .content {
    background: #fff;
    display: flex;
    grid-area: content;
    min-height: 100vh;
  }
</style>
