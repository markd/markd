<template>
  <div class="add">
    <input class="add__input" :placeholder="label" v-on:keyup="updateValue" />
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
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  &__input {
    border: 0;
    display: block;
    outline: 0;
    padding: 8px 12px;
    width: 100%;
  }
}
</style>
