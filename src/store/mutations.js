export default {
  setPinned: (state, newPinned) => {
    state.pinned = newPinned
  },
  setCollections: (state, newCollections) => {
    state.collections = newCollections
  },
  setTags: (state, newTags) => {
    state.tags = newTags
  },
  setItems: (state, newItems) => {
    state.items = newItems
  },
  setLanguage: (state, newLanguage) => {
    state.language = newLanguage
  }
}
