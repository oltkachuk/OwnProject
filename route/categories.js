const express = require("express")
const router = express.Router()
const controller = require("../controllers/categories")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.create)
router.delete("/:id", controller.delete)
router.patch("/:id", controller.update)


module.exports = router