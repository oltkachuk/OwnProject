const express = require("express")
const router = express.Router()
const controller = require("../controllers/transactions")
const passport = require("passport")

router.get("/", passport.authenticate("jwt", {session: false}), controller.getAll)
router.get("/:categoryId", passport.authenticate("jwt", {session: false}), controller.getByCategoryId)
router.get("/:transactionId", passport.authenticate("jwt", {session: false}), controller.getByTransactionId)
router.post("/", passport.authenticate("jwt", {session: false}), controller.create)
router.delete("/:id", passport.authenticate("jwt", {session: false}), controller.delete)
router.patch("/:id", passport.authenticate("jwt", {session: false}), controller.update)



module.exports = router