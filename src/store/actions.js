import db from '../database'

async function getLanguage(commit) {
  try {
    let lang = await db.settings
      .where('name')
      .equals('lang')
      .toArray()

    commit('setLanguage', lang[0].value)
  } catch (err) {
    console.error("Couldn't load language", err)
  }
}

export default {
  async loadLanguage({ commit }) {
    getLanguage(commit)
  },
  async initialLoad({ commit }) {
    await getLanguage(commit)

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
