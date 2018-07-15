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
  getItems: (state) => (id) => {
    console.log(state.items)
    for (let item in state.items) {
      console.log(item[id])
    }
  }
}
