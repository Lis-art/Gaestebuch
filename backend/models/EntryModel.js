import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
	author: {
		type: Number,
		required: true,
		immutable: true,
	},
	textfield: {
		type: String,
	},
	ranking: {
		type: Number,
		required: true,
	},
});

export const entry = mongoose.model("entry", entrySchema);
