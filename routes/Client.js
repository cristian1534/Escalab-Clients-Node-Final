const express = require("express");
const router = express.Router();
const {
  createClient,
  getClients,
  getOneClient,
  updateClient,
} = require("../controllers/Client");

router.post("/client", createClient);
router.get("/client/get-all-clients", getClients);
router.get("/client/edit-client/:id", getOneClient);
router.patch("/client/update-client/:id", updateClient);

module.exports = router;
