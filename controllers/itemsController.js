const db = require("../models")

// defining methods for itemController
module.exports = {
  index: function(req, res) {
    db.Item
      .find(req.query)
      .sort({ item: 1})
      .then(items => res.json(items))
      .catch(err => res.status(422).json(err))
  },
  show: function(req, res) {
    db.Item
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Item
      .create(req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err))
  },
  destroy: function(req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(Item => Item.remove())
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err));
  }
};
