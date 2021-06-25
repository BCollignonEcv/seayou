module.exports = app => {
    const players = require("../controllers/players.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", players.create);

    // Retrieve all Users
    router.get("/", players.findAll);

    // Retrieve a single User with id
    router.get("/:id", players.findOne);

    // Update a User with id
    router.put("/:id", players.update);

    // Delete a User with id
    router.delete("/:id", players.delete);

    // Create a new User
    router.delete("/", players.deleteAll);

    app.use('/api/players', router);
};