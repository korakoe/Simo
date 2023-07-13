migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsfgxgn09hfv2st")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjnmzsbf",
    "name": "retaken",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfzkjvte",
    "name": "late",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsfgxgn09hfv2st")

  // remove
  collection.schema.removeField("hjnmzsbf")

  // remove
  collection.schema.removeField("vfzkjvte")

  return dao.saveCollection(collection)
})
