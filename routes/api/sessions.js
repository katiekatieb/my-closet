const router = require("express").Router()
const sessionsController = require("../../controllers/sessionsController")

router.route("/")
  .post(sessionsController.create)

router.route("/:id")
  .delete(sessionsController.destroy)

module.exports = router;
