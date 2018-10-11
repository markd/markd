<template>
	<span :class="{ selected }" class="tag-chip">
		<svg class="tag-chip__icon">
			<use :xlink:href="`#icon-${tag.icon}`" />
		</svg>
		{{ tag.name }}
	</span>
</template>

<script>
export default {
  props: ['tag', 'selected']
}
</script>

<style lang="scss" scoped>
.tag-chip {
  display: inline-block;
  padding: 4px;
  border-radius: 12px;
  border: 1px solid var(--tag-chip-color);
  color: var(--tag-chip-color);
  margin: 0 2px;
  cursor: pointer;

  &.selected {
    border-color: var(--tag-chip-selected-color);
    color: var(--tag-chip-selected-color);
  }
}

.tag-chip__icon {
  height: 16px;
  width: 16px;
  vertical-align: middle;
}
</style>
