/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "53mvzj1o01w78pv",
    "created": "2024-09-05 02:19:47.656Z",
    "updated": "2024-09-05 02:19:47.656Z",
    "name": "winetype",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ute8wfvb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("53mvzj1o01w78pv");

  return dao.deleteCollection(collection);
})
