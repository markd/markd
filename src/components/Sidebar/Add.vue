<template>
  <div class="add">
    <input
      class="add__input"
      :placeholder="label"
      v-on:keyup="updateValue"
      v-on:blur="resetValue"
      ref="input"
    />
  </div>
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
