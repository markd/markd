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
  getItems: state => {
    return state.items
  },
  getItemsById: state => id => state.items.filter(item => item.collections.includes(Number(id))),
  getItemsByTag: state => id => state.items.filter(item => item.tags.includes(Number(id)))
}
