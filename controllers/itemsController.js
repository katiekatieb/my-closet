const db = require("../models");

// defining methods for itemController
module.exports = {
  findAll: function(req, res) {
    db.Item
      .find(req.query)
      .sort({ item: 1})
      .then(items => res.json(items))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
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
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(item => res.json(item))
      .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
