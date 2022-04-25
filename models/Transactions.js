const mongoose = require('mongoose')
const Users = require('./Users')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    status: {
        type: Number,
        required: true
    }, 
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('transactions', transactionSchema)