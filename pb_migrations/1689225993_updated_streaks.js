migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  collection.listRule = "@request.auth.id = streak_holder.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""
  collection.viewRule = "@request.auth.id = streak_holder.id || @request.auth.type = \"Staff\" || @request.auth.type = \"CEO\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
