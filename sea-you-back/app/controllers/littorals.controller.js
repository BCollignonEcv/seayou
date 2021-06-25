const db = require("../models");
const Littorals = db.littorals;

// Create and Save a new Littoral
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    // Create a Littoral
    const littoral = new Littorals(req.body);

    // Save Littoral in the database
    littoral.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Littoral."
            });
        });
};

// Retrieve all Littorals from the database.
exports.findAll = (req, res) => {
    Littorals.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving littorals."
            });
        });
};

// Find a single Littoral with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Littorals.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Littoral with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Littoral with id=" + id });
        });
};

// Update a Littoral by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Littorals.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Littoral with id=${id}. Maybe Littoral was not found!`
                });
            } else res.send({ message: "Littoral was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Littoral with id=" + id
            });
        });
};

// Delete a Littoral with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Littorals from the database.
exports.deleteAll = (req, res) => {
    Littorals.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Littorals were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};