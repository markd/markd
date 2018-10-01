<template>
  <div class="add-view__content">
    <h1 class="add-view__title">Add a new bookmark</h1>
    <form action="">
      <div class="row">
        <label class="add-view__label col-xs-1" for="name">
          Name:
        </label>
        <div class="col-xs-8">
          <m-input type="text" id="name" placeholder="Awesome Link" v-model="newName"></m-input>
        </div>
      </div>
      <div class="row">
        <label class="add-view__label col-xs-1" for="url">
          URL:
        </label>
        <div class="col-xs-8">
          <m-input id="url" type="text" placeholder="https://markd.it" v-model="newUrl"></m-input>
        </div>
      </div>
      <div class="row">
        <label class="add-view__label col-xs-1">
          Category:
        </label>
        <div class="col-xs-2">
          <m-select v-model="newCollection" :options="collections" keyProp="key">
            <template slot-scope="{ option: collection }">
              <svg class="add-view__collectionIcon" :style="{ color: collection.colour }">
                <use xlink:href="#icon-circle" />
              </svg>
              {{ collection.name }}
            </template>
          </m-select>
        </div>
      </div>
      <div class="row">
        <label class="add-view__label col-xs-1">
          Tags:
        </label>
        <div class="col-xs-8">
          <tag-list :tags="tags" v-model="newTags"></tag-list>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-1 col-xs-1">
          <m-button @click.prevent="addNewBookmark">mark it</m-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import MButton from '../MButton'
import MInput from '../MInput'
import MSelect from '../MSelect'
import TagList from '../TagList'

export default {
  name: 'AddView',

  data() {
    return {
      newName: '',
      newUrl: '',
      newCollection: undefined,
      newTags: ''
    }
  },

  computed: mapGetters({
    tags: 'getTags',
    collections: 'getCollections'
  }),

  methods: Object.assign(
    {
      addNewBookmark() {
        this.addItem({
          name: this.newName,
          url: this.newUrl,
          collections: [this.newCollection.key],
          tags: this.newTags
        })
        this.$router.go(-1)
      }
    },
    mapMutations(['addItem'])
  ),

  components: {
    MButton,
    MInput,
    MSelect,
    TagList
  }
}
</script>

<style lang="scss" scoped>
.add-view__content {
  width: 100%;

  .row {
    margin-top: 8px;
  }
}

.add-view__title {
  font-size: 20px;
  padding: 0 16px 16px 16px;
}

.add-view__label {
  font-weight: 900;
  display: flex;
  align-items: center;
}

.add-view__collectionIcon {
  height: 16px;
  vertical-align: middle;
  width: 16px;
  margin-right: 4px;
}
</style>
