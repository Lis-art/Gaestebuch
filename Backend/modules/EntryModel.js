import mongoose from "mongoose";

const entrySchema = new mongoose.Schema ({

    author: {
        type: Number,
        //mongoose.Types.ObjectId
        //spezieller typ von objectIDs von mongoDB, wichtig für Validierung
        required: true,
        immutable: true
    },
    textfield: {
        type: String
    },
    ranking: {
        type: Number,
        required: true
    }
})

export const entry = mongoose.model("entry", entrySchema);
// initialisiert Schema (so zu sagen Klasse wie in JS) von mongoose