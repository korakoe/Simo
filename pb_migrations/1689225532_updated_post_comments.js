migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("26wzss7gejgoond")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id  ?= author.friends.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.updateRule = "@request.auth.id = author.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.deleteRule = "@request.auth.id = author.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("26wzss7gejgoond")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
