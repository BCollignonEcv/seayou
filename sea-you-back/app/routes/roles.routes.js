module.exports = app => {
    const roles = require("../controllers/roles.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", roles.create);

    // Create a new User
    router.post("/littoral", roles.getByLittoral);

    // Retrieve all Users
    router.get("/", roles.findAll);

    // Retrieve a single User with id
    router.get("/:id", roles.findOne);

    // Update a User with id
    router.put("/:id", roles.update);

    // Delete a User with id
    router.delete("/:id", roles.delete);

    // Create a new User
    router.delete("/", roles.deleteAll);

    app.use('/api/roles', router);
};