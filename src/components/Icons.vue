<template>
  <svg class="icons">
    <symbol viewBox="0 0 24 24" id="icon-plus" fill="currentColor">
      <path d="M14.8617 9.16981H24v5.02639h-9.1383V24H9.18637v-9.8038H0V9.16981h9.18637V0h5.67533v9.16981z"/>
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-circle" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle">
      <circle cx="12" cy="12" r="10"></circle>
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-book" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-star" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-hash" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash">
      <line x1="4" y1="9" x2="20" y2="9"></line>
      <line x1="4" y1="15" x2="20" y2="15"></line>
      <line x1="10" y1="3" x2="8" y2="21"></line>
      <line x1="16" y1="3" x2="14" y2="21"></line>
    </symbol>
  </svg>
</template>

<style lang="scss" scoped>
.icons {
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}
</style>

<script>
export default {
  name: 'Icons'
}
</script>
