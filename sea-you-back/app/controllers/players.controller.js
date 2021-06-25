const db = require("../models");
const Players = db.players;

// Create and Save a new Player
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    // Create a Player
    const player = new Players(req.body);

    // Save Player in the database
    player.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Player."
            });
        });
};

// Retrieve all Players from the database.
exports.findAll = (req, res) => {
    Players.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving players."
            });
        });
};

// Find a single Player with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Players.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Player with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Player with id=" + id });
        });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Players.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Player with id=${id}. Maybe Player was not found!`
                });
            } else res.send({ message: "Player was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Player with id=" + id
            });
        });
};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Players from the database.
exports.deleteAll = (req, res) => {
    Players.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Players were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};