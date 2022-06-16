const Transactions = require('../models/Transactions')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const transactions = Transactions.find({
            user: req.user.id
        })
        res.status(200).json(transactions)
    } catch(e) {
        errorHandler(res, e)
    }

}

module.exports.getByCategoryId = async function (req, res) {
    try {
        const transaction = await Transactions.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(transaction)
        
    } catch (e) {
        errorHandler(res, e)        
    }    
}

module.exports.getByTransactionId = async function (req, res) {
    try {
        const transactions = await Transactions.find({_id: req.params.transactionId})
        res.status(200).json(transactions)
        
    } catch (e) {
        errorHandler(res, e)        
    }    
}

module.exports.create = async function (req, res) {
    try {
        const transaction = await new Transactions({
            status: req.body.status,
            user: req.body.user,
            category: req.body.category,
            amount: req.body.amount
        }).save()
        res.status(201).json(transaction)
    } catch (e) {
        errorHandler(res, e)        
    }
}

module.exports.delete = async function (req, res) {
    try {
        await Transactions.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Трансакція видалена'
        })
    } catch (e) {
        errorHandler(res, e)        
    }
}

module.exports.update = async function (req, res) {
    try {
        const transaction = await Transactions.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(transaction)
    } catch (e) {
        errorHandler(res, e)        
    }    
}