<template>
	<div>
		<tag-chip
		  v-for="tag in tags"
		  :key="tag.key"
		  @click.native="select(tag.key)"
		  :tag="tag"
		  :selected="value.includes(tag.key)"
		></tag-chip>
	</div>
</template>

<script>
import TagChip from './TagChip'

export default {
  props: ['tags', 'value'],
  components: {
    TagChip
  },
  methods: {
    select(id) {
      if (this.value.includes(id)) {
        this.$emit('input', this.value.filter(tId => tId !== id))
      } else {
        this.$emit('input', [id, ...this.value])
      }
    }
  }
}
</script>

<style>
</style>
