const {v4: uuid} = require('uuid');
const { db, todos } = require("../utils/db");
const { TodoRecord } = require("../records/todo.record");
const { ObjectId } = require('mongodb');

class TodoRepository {
    static _checkRecord(record) {
        if (!(record instanceof TodoRecord)) {
            throw new Error('record must be an instance of TodoREecord')
        }
    }

    static async insert(record) {
        TodoRepository._checkRecord(record);

        const {insertedId} = await todos.insertOne(record);
        record._id = insertedId;

        return insertedId;
    };

    static async delete(record) {
        TodoRepository._checkRecord(record);
        
        await todos.deleteOne({
            _id: record._id,
        });
    }

    static async find(id) {
        if (typeof id instanceof ObjectId) {
            const item = await todos.findOne({_id:String(id)})
            return item === null ? null : new TodoRecord(item);
        }
        const item = await todos.findOne({_id:ObjectId(String(id))})
        return item === null ? null : new TodoRecord(item);
    }

    static async findAll() {
        return ((await todos.find()).toArray()).map(obj => new TodoRecord(obj));
    }

    static async update(record) {
        TodoRepository._checkRecord(record);

        if (!record._id) {
            throw new Error('Todo has no ID.')
        }

        await todos.replaceOne({
            _id: record._id,
        }, {
            title: String(record.title),
        });

        return record._id;
    };

}

module.exports = {
    TodoRepository,
};