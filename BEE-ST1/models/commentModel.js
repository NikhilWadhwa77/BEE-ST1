const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required
    },
    author: {
        type: String,
        required
    },
    createdAt: {
        type: String,
        required
    }
})

module.exports = new mongoose.model('comments', commentSchema)