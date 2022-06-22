const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
	username: {
		type: String,
		require: [true, 'User must have a username'],
		unique: true,
	},
	password: {
		type: String,
		require: [true, 'User must have a username'],
	},
});

const User = mongoose.model("User", userShema);
module.exports = User;