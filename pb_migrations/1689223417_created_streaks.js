migrate((db) => {
  const collection = new Collection({
    "id": "qog97k4l42gzemp",
    "created": "2023-07-13 04:43:37.720Z",
    "updated": "2023-07-13 04:43:37.720Z",
    "name": "streaks",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "qijv1cem",
        "name": "count",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "whuvyxpu",
        "name": "task_sender",
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
  const collection = dao.findCollectionByNameOrId("qog97k4l42gzemp");

  return dao.deleteCollection(collection);
})
