<template>
  <nav class="navigation">
    <div class="navigation__searchform">
      <input type="text" class="navigation__searchformInput" placeholder="Search" />
    </div>
    <div class="filterOptions">
      <button class="filterOptions__option">
        List
      </button>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        title: this.$store.state.viewTitle || 'Navigation Title',
        groups: this.$store.state.groups
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    grid-area: navigation;
    display: flex;
    height: 56px;
    padding: 4px 16px;
    width: 100%;
  }

  .navigation__searchform {
    flex-grow: 1;
    padding: 0 16px 0 0;
  }

  .navigation__searchformInput {
    background: #f3f3f3;
    border-radius: 4px;
    border: 0;
    display: block;
    outline: 0;
    padding: 8px;
    width: 100%;
    font-size: 14px;
  }

  .filterOptions {

  }
</style>
