const express = require("express");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const connectionDB = require("./database/database");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("Swagger-jsdoc");
const swaggerConfig = require("./documentation/swagger.config.json");
require("dotenv").config();

const app = express();
connectionDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use(
  "/api/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
);
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(5000, function () {
  console.log("Server running...");
});
