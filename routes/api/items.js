const router = require("express").Router()
const itemsController = require("../../controllers/itemsController")

router.route("/")
  .get(itemsController.index)
  .post(itemsController.create)

router.route("/:id")
  .get(itemsController.show)
  .put(itemsController.update)
  .delete(itemsController.destroy)

module.exports = router;
