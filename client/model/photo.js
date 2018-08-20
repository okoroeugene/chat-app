const mongoose = require('mongoose')
const Schema = mongoose.Schema

var photoSchema = new Schema({
    description: { type: String, required: true },
    image: String,
    date: Date
})

module.exports = mongoose.model('Photo', photoSchema);