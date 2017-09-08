<template>
  <el-card :header="title">
    <p>Hey there.</p>
  </el-card>
</template>

<script>
  import { title } from './data'
  import ElCard from '../node_modules/element-ui/packages/card/src/main.vue'
  export default {
    components: { ElCard },
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
