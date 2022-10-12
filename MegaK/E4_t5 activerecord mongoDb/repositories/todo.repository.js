const {v4: uuid} = require('uuid');
const { db, todos } = require("../utils/db");
const { TodoRecord } = require("../records/todo.record");
const { ObjectId } = require('mongodb');

class TodoRepository {

    // static async insert(record) {
    //     TodoRepository._checkRecord(record);

    //     const {insertedId} = await todos.insertOne(record);
    //     record._id = insertedId;

    //     return insertedId;
    // };

    // static async delete(record) {
        
    //     await todos.deleteOne({
    //         _id: record._id,
    //     });
    // }

    // static async find(id) {
    //     if (typeof id instanceof ObjectId) {
    //         const result = await todos.findOne({_id:String(id)})
    //         return result === null ? null : new TodoRecord(result);
    //     }
    //     const result = await todos.findOne({_id:ObjectId(String(id))})
    //     return result === null ? null : new TodoRecord(result);
    // }

    // static async findAll() {
    //     const results =  await todos.find();
    //     return (await todos.find()).toArray();
    // }

    // static async update(record) {

    //     if (!record._id) {
    //         throw new Error('Todo has no ID.')
    //     }

    //     await todos.replaceOne({
    //         _id: record._id,
    //     }, {
    //         title: String(record.title),
    //     });

    //     return record._id;
    // };

}

module.exports = {
    TodoRepository,
};