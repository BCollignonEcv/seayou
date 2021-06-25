module.exports = app => {
    const littorals = require("../controllers/littorals.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", littorals.create);

    // Retrieve all Users
    router.get("/", littorals.findAll);

    // Retrieve a single User with id
    router.get("/:id", littorals.findOne);

    // Update a User with id
    router.put("/:id", littorals.update);

    // Delete a User with id
    router.delete("/:id", littorals.delete);

    // Create a new User
    router.delete("/", littorals.deleteAll);

    app.use('/api/littorals', router);
};