<template>
  <div class="group">
    <div class="group-title">Pinned</div>
    <div class="group-items">
      <div class="group-item">
        <template v-for="(pin, i) in pinned">
          <i class="material-icons" v-text="pin.icon"></i>
          <div class="group-item-name">{{pin.name }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pinned',
    data () {
      return {
        pinned: this.$store.state.pinned
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
        i {
          position: absolute;
          color: #CCCCCC;
          font-size: 18px;
        }
        .group-item-name {
          color: var(--font-color);
          font-size: 18px;
          margin-left: 25px;
        }
      }
    }
  }
</style>
