<template>
    <div></div>
</template>

<script>
  import { title } from './data'
  export default {
    name: 'app',
    data () {
      return {
        title
      }
    }
  }
</script>

<style lang="scss">
  // Font imports
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400|Source+Sans+Pro:300,400');

  // Variables
  :root {
    --font-stack: 'Roboto', BlinkMacSystemFont, -apple-system, "Oxygen", "Ubuntu", "Fira Sans", "Helvetica", "Arial", sans-serif;
    .light {
      // Light theme variables
    }
    .dark {
      // Dark theme variables
    }
  }

  html {
    font-family: var(--font-stack);
  }
</style>
