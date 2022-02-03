const { Schema, model } = require('mongoose');

const listSchema = new Schema(
	{
		store: { type: String, required: true, unique: true },
		item: { type: String, required: true },
		quantity: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

module.exports = model('List', listSchema);
