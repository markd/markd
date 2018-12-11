<template>
  <div id="app" class="light">
    <icons />
    <navigation />
    <sidebar />
    <main class="content">
       <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Icons from './components/Icons'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navigation,
    Icons
  },
  data() {
    return {
      //
    }
  },
  created() {
    this.$store.dispatch('initialLoad')
  }
}
</script>

<style lang="scss">
@import './assets/scss/styles.scss';

#app {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-areas:
    'sidebar navigation'
    'sidebar content';

  @media screen and (max-width: 800px) {
    grid-template-columns: 256px 1fr;
  }
}

.content {
  background: var(--content-background);
  display: flex;
  grid-area: content;
  min-height: 100vh;
  overflow: auto;
  padding: 2rem;
}

::-webkit-input-placeholder,
:-webkit-input-placeholder,
:-ms-input-placeholder,
:-moz-placeholder,
::-moz-placeholder {
  color: #fff;
}
</style>
