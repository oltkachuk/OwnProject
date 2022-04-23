const express = require("express")
const router = express.Router()
const controller = require("../controllers/analytics")

router.get("/home", controller.home)
router.get("/analytic", controller.analytic)


module.exports = router