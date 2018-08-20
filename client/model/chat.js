const mongoose = require('mongoose')
const Schema = mongoose.Schema

var chatSchema = new Schema({
    content: { type: String, required: true },
    roomId: { type: String, required: true },
    groupId: { type: String, required: true, ref: 'Group' },
    date: Date
})

module.exports = mongoose.model('Chat', chatSchema);