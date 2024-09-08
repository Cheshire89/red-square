/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9gb2uukfy2qvex")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jsb6nl5",
    "name": "item_name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9gb2uukfy2qvex")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jsb6nl5",
    "name": "item_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
