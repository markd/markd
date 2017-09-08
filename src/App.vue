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
  // SCSS styles
</style>
