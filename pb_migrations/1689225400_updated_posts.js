migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsfgxgn09hfv2st")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id ?= author.friends.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id ?= author.friends.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id = author.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.deleteRule = "@request.auth.id = author.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsfgxgn09hfv2st")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
