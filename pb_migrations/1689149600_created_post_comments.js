migrate((db) => {
  const collection = new Collection({
    "id": "26wzss7gejgoond",
    "created": "2023-07-12 08:13:20.806Z",
    "updated": "2023-07-12 08:13:20.806Z",
    "name": "post_comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jbefqnjc",
        "name": "post",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "nsfgxgn09hfv2st",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "unaykapz",
        "name": "author",
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
      },
      {
        "system": false,
        "id": "vctxmbtx",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("26wzss7gejgoond");

  return dao.deleteCollection(collection);
})
