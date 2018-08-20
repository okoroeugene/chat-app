const mongoose = require('mongoose')
const Schema = mongoose.Schema

var roomSchema = new Schema({
    name: { type: String, required: true },
    date: Date
})

module.exports = mongoose.model('Room', roomSchema);