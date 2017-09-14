import Dexie from 'dexie'

const db = new Dexie('markd')

db.version(1).stores({
  collections: '++key, name, description',
  items: '++key, name, url, collections, tags',
  tags: '++key, name',
  settings: 'name, value'
})

// Create initial settings if not set already
db.settings.put({ name: 'theme', value: 'dark' })
db.settings.put({ name: 'lang', value: 'en' })

export default db
