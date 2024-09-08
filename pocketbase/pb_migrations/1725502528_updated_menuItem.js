/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9gb2uukfy2qvex")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eox6yu6a",
    "name": "is_raw",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9gb2uukfy2qvex")

  // remove
  collection.schema.removeField("eox6yu6a")

  return dao.saveCollection(collection)
})
