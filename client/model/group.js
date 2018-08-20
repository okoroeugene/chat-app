const mongoose = require('mongoose')
const Schema = mongoose.Schema

var groupSchema = new Schema({
    nickname: { type: String, required: true },
    roomId: { type: String, required: true, ref: 'Room' },
    isActive: Boolean,
    date: Date
})

module.exports = mongoose.model('Group', groupSchema);