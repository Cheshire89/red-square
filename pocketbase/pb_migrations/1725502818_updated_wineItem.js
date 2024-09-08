/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnz3k2mvtszh3th")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "csloc4ft",
    "name": "type",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "53mvzj1o01w78pv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tnz3k2mvtszh3th")

  // remove
  collection.schema.removeField("csloc4ft")

  return dao.saveCollection(collection)
})
