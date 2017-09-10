<template>
  <div class="group">
    <div class="group-title">Groups</div>
    <div class="group-items">
      <div class="group-item">
        <template v-for="(group, i) in groups">
          <i class="group-item-circle" :style="`color: ${group.colour}`">●</i>
          <div class="group-item-name">{{ group.name }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Groups',
    data () {
      return {
        groups: this.$store.state.groups
      }
    }
  }
</script>

<style lang="scss">
  .group {
    margin-top: 12px;
    margin-left: 20px;
    .group-title {
      color: #CCCCCC;
      font-size: 9px;
    }
    .group-items {
      .group-item {
        .group-item-name {
          color: var(--font-color);
          font-size: 18px;

          i {
            color: #CCCCCC;
          }
        }
      }
    }
  }
</style>
