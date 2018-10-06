export default {
  pinned: state => state.pinned,
  collections: state => state.collections,
  tags: state => state.tags,
  items: state => state.items,
  getItemsById: state => id =>
    state.items.filter(item => item.collections.includes(Number(id))),
  getItemsByTag: state => id =>
    state.items.filter(item => item.tags.includes(Number(id))),
  language: state => state.language
}
