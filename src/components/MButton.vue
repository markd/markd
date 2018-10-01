<template>
	<button class="mbutton" v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.mbutton {
  color: white;
  background: var(--main-color);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 9px;
  width: 100%;

  &:hover {
    background: lighten(#ff7800, 25);
  }
}
</style>
