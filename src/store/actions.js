import db from '../database'

async function getCollections(commit) {
  try {
    let collections = await db.collections
      .where('pinned')
      .equals(0)
      .toArray()
    commit('setCollections', collections)
  } catch (err) {
    console.error("Couldn't load collections", err)
  }
}

async function getPinnedCollections(commit) {
  try {
    let pinned = await db.collections
      .where('pinned')
      .equals(1)
      .toArray()
    commit('setPinned', pinned)
  } catch (err) {
    console.error("Couldn't load pinned", err)
  }
}

async function getTags(commit) {
  try {
    let tags = await db.tags.toArray()
    commit('setTags', tags)
  } catch (err) {
    console.error("Couldn't load tags", err)
  }
}

async function getItems(commit) {
  try {
    let items = await db.items.toArray()
    commit('setItems', items)
  } catch (err) {
    console.error("Couldn't load items", err)
  }
}

export default {
  loadCollections: ({ commit }) => {
    getCollections(commit)
    getPinnedCollections(commit)
  },
  loadTags: ({ commit }) => {
    getTags(commit)
  },
  loadItems: ({ commit }) => {
    getItems(commit)
  },
  initialLoad: ({ commit }) => {
    getCollections(commit)
    getPinnedCollections(commit)
    getTags(commit)
    getItems(commit)
  }
}
