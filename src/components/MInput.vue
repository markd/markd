<template>
	<input class="minput" v-bind="$attrs" @input="({ target: { value }}) => $emit('input', value)">
</template>

<style lang="scss" scoped>
.minput {
  color: black;
  background: #ececec;
  border-radius: 4px;
  border: 0;
  display: block;
  outline: 0;
  padding: 8px;
  width: 100%;
  font-size: 14px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.075);
}
</style>
