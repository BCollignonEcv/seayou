const db = require("../models");
const Users = db.users;

// Create and Save a new User
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    // Create a User
    const user = new Users(req.body);

    // Save User in the database
    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Check if user exist.
exports.login = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return
    }

    Users.find({ 'email': req.body.email, 'password': req.body.password })
        .then(data => {
            if (data.length === 0)
                res.status(404).send({ message: "We don't find any user link to this email" });
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "An error occured during login" });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Users.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update User with id=${id}. Maybe User was not found!`
                });
            } else res.send({ message: "User was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    Users.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Users were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};