const db = require("../models");
const Answer = db.answers;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.userId && !req.body.roundId) {
    res.status(400).send({
      message: "RoomId or UserId is missing!",
    });
    return;
  }

  // Create a Tutorial
  const answer = {
    name: req.body.userId,
    roomId: req.body.roomId,
    time: new Date().getTime(),
  };

  // Save Tutorial in the database
  Answer.create(answer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Room.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const roundId = req.query.roundId;

  Answer.findAll({ where: { roundId: roundId } })
    .then((data) => {
      if (data) {
        res.send(data);
        console.log(data);
      } else {
        res.status(404).send({
          message: `Cannot find Room with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Room with id=" + id,
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Answer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Room with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Room with id=" + id,
      });
    });
};

exports.updateRound = (req, res) => {
  const id = req.params.id;

  Answer.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Round was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Round with id=${id}. Maybe Round was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Round with id=" + id,
      });
    });
};
