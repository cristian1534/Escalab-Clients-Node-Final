const express = require("express");
const router = express.Router();
const {create} = require("../controllers/Client");

router.post("/client", create);

module.exports = router;
