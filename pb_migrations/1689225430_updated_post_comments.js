migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("26wzss7gejgoond")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id ?= author.friends.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id ?= author.friends.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("26wzss7gejgoond")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
