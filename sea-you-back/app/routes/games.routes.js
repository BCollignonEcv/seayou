module.exports = app => {
    const games = require("../controllers/games.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", games.create);

    // Create a new User
    router.put("join/:id", games.join);

    // Retrieve all Users
    router.get("/", games.findAll);

    // Retrieve a single User with id
    router.get("/:id", games.findOne);

    // Update a User with id
    router.put("/:id", games.update);

    // Delete a User with id
    router.delete("/:id", games.delete);

    // Create a new User
    router.delete("/", games.deleteAll);

    app.use('/api/games', router);
};