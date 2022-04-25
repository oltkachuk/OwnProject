const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    imageSrc: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('categories', categorySchema)