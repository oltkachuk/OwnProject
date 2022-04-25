const bycript = require("bcryptjs")
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require("../utils/errorHandler")
const User = require("../models/Users")

module.exports.login = async function (req, res) {

    const hasRecord = await User.findOne({email: req.body.email})

    if(hasRecord) {
        // find record by email

        const comparePassword = bycript.compareSync(req.body.password, hasRecord.password)

        if(comparePassword) {
            // password compared need generate token
            const token = jwt.sign({
                email: hasRecord.email,
                userId: hasRecord._id
            }, keys.jwt, {expiresIn: 3600})

            res.status(200).json({
                token: `Bearer ${token}`
            })

        } else {
            res.status(401).json({
                message: "Введено невірний пароль"
            })
        }

    } else {
        res.status(404).json({
            message: "Користувача з таким email не знайдено"
        })
    }
}

module.exports.register = async function (req, res) {

    const hasRecord = await User.findOne({email: req.body.email})

    if(hasRecord) {
        // confuse by email error
        res.status(409).json({
            message: "Користувач з таким емейлом уже існує"
        })

    } else {
        const salt = bycript.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bycript.hashSync(password, salt),
            name: req.body.name
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch(e) {
            errorHandler(e)
        }
    }

}