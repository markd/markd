<template>
  <sidebar :title="title"></sidebar>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import { title } from './data'
  export default {
    name: 'App',
    components: {
      Sidebar
    },
    data () {
      return {
        title
      }
    }
  }
</script>
