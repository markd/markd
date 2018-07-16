export default {
  getPinned: state => {
    return state.pinned
  },
  getCollections: state => {
    return state.collections
  },
  getTags: state => {
    return state.tags
  },
  // fuck this getter, FIXME: return the items which have the same collection id
  // make use of return state.items.find(e => e.id == id) OR state.items.filter() which is better to return all items with that id
  getItems: (state) => (id) => {
    for (let item in state.items) {
      for (let collection in state.items[item].collections) {
        if (state.items[item].collections[collection] === Number(id)) {
          return state.items
        }
      }
    }
  }
}
