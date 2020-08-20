const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    entryDate: { type: Date, required: true },
    dayEntry: String,
    games: [
        {
            gameName: String,
            gameImgSrc: String,
            gameEntry: String
        }
    ]
}, { timestamps: true });

const Entry = mongoose.model('entries', entrySchema);

module.exports = Entry;