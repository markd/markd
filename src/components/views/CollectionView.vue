<template>
  <div>
    <span>Showing CollectionView for id {{ $route.params.id }}</span>
    <br>
    <template v-for="item in items">
      <a :href="item.url" :key="item.key" target="_blank">{{item.name}}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CollectionView',
  computed: {
    items() {
      return this.$store.getters.getItemsById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  text-decoration: none;
  margin-bottom: 1rem;
}
</style>
