<template>
	<div class="mselect__container">
		<m-button class="mselect__button" @click.prevent="opened = !opened">
			<slot v-if="value" :option="value">
				{{ value }}
			</slot>
			<slot v-else name="placeholder">Select Something</slot>
		</m-button>
		<div class="mselect__list" v-show="opened">
			<button class="mselect__option" v-for="(option, i) in options" :key="keyProp ? option[keyProp] : i" @click.prevent="select(option)">
				<slot :option="option">
					{{ option }}
				</slot>
			</button>
		</div>
	</div>
</template>

<script>
import MButton from './MButton'
export default {
  props: ['options', 'value', 'keyProp'],
  data() {
    return {
      opened: false
    }
  },
  methods: {
    select(option) {
      this.opened = false
      this.$emit('input', option)
    },
    outsideClick({ target }) {
      if (target !== this.$el && !this.$el.contains(target)) this.opened = false
    }
  },
  mounted() {
    document.addEventListener('click', this.outsideClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.outsideClick)
  },
  components: {
    MButton
  }
}
</script>

<style lang="scss" scoped>
.mselect__container {
  position: relative;
}

.mselect__list {
  position: absolute;
  z-index: 2;
  margin-top: 4px;
  border-radius: 4px;
  overflow: hidden;
  background: #ececec;
  width: 100%;
}

.mselect__option {
  padding: 4px;
  display: block;
  background: inherit;
  border: none;
  color: inherit;
  width: 100%;
  text-align: left;

  &:focus,
  &:hover {
    background: var(--main-color);
  }
}
</style>
