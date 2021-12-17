const { Schema, model } = require('mongose');

const listSchema = new Schema(
	{
		store: { type: String, required: true, unique: true },
		item: String,
		quantity: String
	},
	{
		timestamps: true
	}
);

module.exports = model('List', listSchema);
