const { ObjectId } = require("mongodb");
const { todos } = require("../utils/db");

class TodoRecord {
    constructor(obj) {
        this._id = ObjectId(obj._id);
        this.title = obj.title;
        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo title should be at leatest 5 characters.');
        }

        if (this.title.trim() > 150) {
            throw new Error('Todo title should be at most  150 characters.');
        }
    }


    async insert() {
        const {insertedId} = await todos.insertOne({
            _id: this._id,
            title: String(this.title),
        });
        this._id = insertedId;

        return insertedId;
    };

    async delete() {
        await todos.deleteOne({
            _id: this._id,
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
        // const result = await todos.find();
        // const resultArray = await result.toArray();
        // const outArray = resultArray.map( obj => new TodoRecord(obj));
        // return outArray;
        return (await (await todos.find()).toArray()).map(obj => new TodoRecord(obj));
    }

    static async findAllWithCursor() {
        return todos.find();
    }

    async update() {

        if (!this._id) {
            throw new Error('Todo has no ID.')
        }

        await todos.replaceOne({
            _id: this._id,
        }, {
            title: String(this.title),
        });

        return this._id;
    };


}

module.exports = {
    TodoRecord,
}
