const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')

const keys = require("./config/keys")
const authRouter = require("./route/auth")
const bodyParser = require("body-parser")
const analyitcsRouter = require("./route/analytics")
const categoryRouter = require("./route/categories")
const transactionRouter = require("./route/transactions")

app.use(passport.initialize())
require("./middleware/passport-jwt")(passport)

mongoose.connect(keys.mongoURL)
 .then(() => {
     console.log("MongoDB connected")
 })
 .catch( e => {console.log(e)} )



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// cors (for open with other domens)
app.use(require("cors")())

//morgan (for dev userful testing)
app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))

app.use("/api/auth", authRouter)
app.use("/api/analytics", analyitcsRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/transactions", transactionRouter)


module.exports = app
