<template>
  <div class="add-view--content">
    <label>Add a new bookmark</label>
    <form action="">
      <input type="text" placeholder="https://markd.it" v-model="newUrl">
      <button @click.prevent="addNewBookmark">mark it</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddView',
    data () {
      return {
        newUrl: ''
      }
    },
    methods: {
      addNewBookmark () {
        console.log(this.newUrl)
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .add-view--content{
    width: 100%
  }
  label {
    font-weight: 900;
    display: block;
    margin-bottom: 5px;
  }
  input {
    background: #ececec;
    border-radius: 4px;
    border: 0;
    display: block;
    outline: 0;
    padding: 8px;
    width: 100%;
    font-size: 14px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.075);
  }
</style>
