const db = require("../models");
const Games = db.games;

// Create and Save a new Game
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    // Create a Game
    const game = new Games(req.body);

    // Save Game in the database
    game.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Game."
            });
        });
};

// Retrieve all Games from the database.
exports.findAll = (req, res) => {
    Games.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};

// Find a single Game with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Games.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Game with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Game with id=" + id });
        });
};

// Update a Game by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Games.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Game with id=${id}. Maybe Game was not found!`
                });
            } else res.send({ message: "Game was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Game with id=" + id
            });
        });
};

// Update a Game by the id in the request
exports.join = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Games.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Game with id=${id}. Maybe Game was not found!`
                });
            } else res.send({ message: "Game was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Game with id=" + id
            });
        });
};

// Delete a Game with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Games from the database.
exports.deleteAll = (req, res) => {
    Games.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Games were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};