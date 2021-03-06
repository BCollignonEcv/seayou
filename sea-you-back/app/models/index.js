const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./users.model.js")(mongoose);
db.players = require("./players.model.js")(mongoose);
db.roles = require("./roles.model.js")(mongoose);
db.games = require("./games.model.js")(mongoose);
db.littorals = require("./littorals.model.js")(mongoose);

module.exports = db;