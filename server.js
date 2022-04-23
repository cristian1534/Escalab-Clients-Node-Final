const express = require("express");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const connectionDB = require("./database/database");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectionDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(cors());


readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(5000, function () {
  console.log("Server running...");
});
