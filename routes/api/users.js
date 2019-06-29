const router = require("express").Router()
const usersController = require("../../controllers/usersController")

router.route("/")
  .post(usersController.create)

router.route("/:id")
  .get(usersController.show)
  .put(usersController.update)

module.exports = router;
