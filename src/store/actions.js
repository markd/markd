import db from '../database'

export default {
  async initialLoad({ commit }) {
    try {
      let collections = await db.collections
        .where('pinned')
        .equals('false')
        .toArray()
      commit('setCollections', collections)
    } catch (err) {
      console.error("Couldn't load collections", err)
    }

    try {
      let pinned = await db.collections
        .where('pinned')
        .equals('true')
        .toArray()
      commit('setPinned', pinned)
    } catch (err) {
      console.error("Couldn't load pinned", err)
    }

    try {
      let tags = await db.tags.toArray()
      commit('setTags', tags)
    } catch (err) {
      console.error("Couldn't load tags", err)
    }

    try {
      let items = await db.items.toArray()
      commit('setItems', items)
    } catch (err) {
      console.error("Couldn't load items", err)
    }
  }
}
