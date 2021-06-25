const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());


// Routes
require("./app/routes/users.routes")(app);
require("./app/routes/roles.routes")(app);
require("./app/routes/littorals.routes")(app);
require("./app/routes/games.routes")(app);
require("./app/routes/players.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});