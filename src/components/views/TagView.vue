<template>
  <div>
    <span>Showing TagView for id {{ $route.params.id }}</span>
    <template v-for="item in items">
      <a :href="item.url" :key="item.key" target="_blank">{{item.name}}</a>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'TagView',
    computed: {
      items () {
        return this.$store.getters.getItemsByTag(this.$route.params.id)
      }
    }
  }
</script>
