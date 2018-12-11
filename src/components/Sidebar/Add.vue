<template>
  <form class="add" v-on:submit="submitValue">
    <input
      class="add__input"
      :placeholder="label"
      v-on:keyup="updateValue"
      v-on:blur="resetValue"
      ref="input"
    />
  </form>
</template>

<script>
export default {
  name: 'Add',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue: function(e) {
      this.$emit('input', e.currentTarget.value)
    },
    resetValue: function() {
      this.$emit('reset')
      this.$refs.input.value = ''
    },
    submitValue: function(e) {
      e.preventDefault()
      this.$emit('submit', this.$refs.input.value)
      this.resetValue()
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  &__input {
    background: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: block;
    outline: 0;
    padding: 8px 12px;
    width: 100%;
  }
}
</style>
