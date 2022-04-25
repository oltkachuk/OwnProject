const express = require("express")
const router = express.Router()
const passport = require("passport")
const controller = require("../controllers/analytics")

router.get("/home", passport.authenticate("jwt", {session: false}), controller.home)
router.get("/analytic", passport.authenticate("jwt", {session: false}), controller.analytic)


module.exports = router