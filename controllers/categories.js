const Categories = require('../models/Categories')
const Transactions = require('../models/Transactions')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const categories = await Categories.find({
            user: req.user.id
        })
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)        
    }    
}

module.exports.getById = async function (req, res) {
    try {
        const category = await Categories.findById(req.params.id)
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)        
    }     
}

module.exports.create = async function (req, res) {
    console.log(req.user.id)
    try {
        const category = await new Categories({
            name: req.body.name,
            user: req.user.id,
            imageSrc: req.file ? req.file.path : ''
        }).save()
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)        
    }    
}

module.exports.delete = async function (req, res) {
    try {
        await Categories.remove({_id: req.params.id})
        await Transactions.remove({category: req.params.id})
        req.status(200).json({
            message: 'Категорія успішно видалена'
        })
    } catch (e) {
        errorHandler(res, e)        
    }    
}

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name
    }
    if(req.file) {
        updated.imageSrc = req.file.path
    }
    try {
        const category = await Categories.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)        
    }    
}