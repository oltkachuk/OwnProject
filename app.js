const express = require('express')
const app = express()
const authRouter = require("./route/auth")
const analyitcsRouter = require("./route/analytics")
const categoryRouter = require("./route/categories")
const transactionRouter = require("./route/transactions")

app.use("/api/auth", authRouter)
app.use("/api/analytics", analyitcsRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/transactions", transactionRouter)


module.exports = app
