migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id ?!= @collection.streaks.streak_holder.id "
  collection.updateRule = "@request.auth.id = streak_holder.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
