import Dexie from 'dexie'

const db = new Dexie('markd')

db.version(1).stores({
  collections: '++key, name, description, colour, icon, pinned',
  items: '++key, name, url, collections, tags',
  tags: '++key, name, icon',
  settings: 'name, value'
})

// Create initial settings if not set already
db.settings.put({
  name: 'theme',
  value: 'dark'
})
db.settings.put({
  name: 'lang',
  value: 'en'
})

// Set initial data for collections (will be removed later)
db.collections.count((count) => {
  // Only insert test data if it hasn't been inserted yet
  if (count === 0) {
    db.collections.put({
      name: 'Web Development',
      description: 'All Bookmarks about Webdev',
      colour: 'red',
      icon: undefined,
      pinned: 'false'
    })
    db.collections.put({
      name: 'Spicy Memes',
      description: 'Only the best and freshest Memes',
      colour: 'green',
      icon: undefined,
      pinned: 'false'
    })
    db.collections.put({
      name: 'All Bookmarks',
      description: 'All of your saved Bookmarks',
      colour: 'blue',
      icon: 'book',
      pinned: 'true'
    })
    db.collections.put({
      name: 'Favourite Bookmarks',
      description: 'Your favourite Bookmarks',
      colour: undefined,
      icon: 'star',
      pinned: 'true'
    })
    db.collections.put({
      name: 'Devcord',
      description: 'A friendly Webdev community',
      colour: 'black',
      icon: undefined,
      pinned: 'false'
    })
    db.collections.put({
      name: 'Markd.it',
      description: 'The best bookmark manager',
      colour: 'orange',
      icon: undefined,
      pinned: 'false'
    })

    // Set initial data for tags (will also be removed later)
    db.tags.put({
      name: 'reads',
      icon: 'hash'
    })
    db.tags.put({
      name: 'blog',
      icon: 'hash'
    })
    db.tags.put({
      name: 'news',
      icon: 'hash'
    })
    db.tags.put({
      name: 'design',
      icon: 'hash'
    })
    db.tags.put({
      name: 'coding',
      icon: 'hash'
    })
    db.tags.put({
      name: 'memes',
      icon: 'hash'
    })
    db.tags.put({
      name: 'cats',
      icon: 'hash'
    })
  }
})

export default db
