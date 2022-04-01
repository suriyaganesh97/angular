const db = require("../models");
const Tracker = db.trackers;
const Op = db.Sequelize.Op;
// Create and Save a new trackers
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tracker
  const tracker = {
    username: req.body.username,
    userdescription: req.body.userdescription,
    userpublished: req.body.userpublished ? req.body.userpublished : false
  };
  // Save Tracker in the database
  Tracker.create(tracker)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tracker."
      });
    });
};
// Retrieve all trackers from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    Tracker.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
// Find a single trackers with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tracker.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tracker with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tracker with id=" + id
        });
      });
};
// Update a trackers by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Tracker.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tracker was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tracker with id=${id}. Maybe Tracker was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tracker with id=" + id
        });
      });
};
// Delete a trackers with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tracker.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tracker was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tracker with id=${id}. Maybe Tracker was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tracker with id=" + id
        });
      });
};
// Delete all trackers from the database.
exports.deleteAll = (req, res) => {
    Tracker.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Trackers were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all trackers."
          });
        });
};
// Find all trackers with completed=true
exports.findAllPublished = (req, res) => {
    Tracker.findAll({ where: { userpublished: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trackers."
        });
      });
  };