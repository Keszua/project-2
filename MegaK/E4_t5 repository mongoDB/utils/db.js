const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});
client.connect();

const db = client.db('megak_todo');

const todos = db.collection('todos');

module.exports = {
	client,
    db,
	todos,
};