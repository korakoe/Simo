migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmq5ijpi",
    "name": "streak_holder",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmq5ijpi",
    "name": "streak_holder",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
