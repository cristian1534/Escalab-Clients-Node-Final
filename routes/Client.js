const express = require("express");
const router = express.Router();
const {
  createClient,
  getClients,
  getOneClient,
  updateClient,
  deleteClient,
} = require("../controllers/Client");

router.post("/client", createClient);
router.get("/client/get-all-clients", getClients);
router.get("/client/edit-client/:id", getOneClient);
router.patch("/client/update-client/:id", updateClient);
router.delete("/client/delete-client/:id", deleteClient);

module.exports = router;
