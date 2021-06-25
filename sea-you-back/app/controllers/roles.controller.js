const db = require("../models");
const Roles = db.roles;

// Create and Save a new Role
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    // Create a Role
    const role = new Roles(req.body);

    // Save Role in the database
    role.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Role."
            });
        });
};

// Check if user exist.
exports.getByLittoral = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    Roles.find({ littoralIds: req.body.littoralId, mandatory: true })
        .then(dataMandatory => {
            Roles.find({ littoralIds: req.body.littoralId, mandatory: { $ne: true } })
                .then(data => {
                    res.send([dataMandatory, data]);
                })
                .catch(err => {
                    res.status(500).send({ message: "An error occured during login" });
                });

        })
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
    Roles.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving roles."
            });
        });
};

// Find a single Role with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Roles.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Role with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Role with id=" + id });
        });
};

// Update a Role by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Roles.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Role with id=${id}. Maybe Role was not found!`
                });
            } else res.send({ message: "Role was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Role with id=" + id
            });
        });
};

// Delete a Role with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Roles from the database.
exports.deleteAll = (req, res) => {
    Roles.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Roles were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};