const express = require("express");
const router = express.Router();
const {
  createClient,
  getClients,
  getOneClient,
  updateClient,
  deleteClient,
} = require("../controllers/Client");
const {validateClient} = require("../middleware/validateClient");

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create Client
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Client"
 *     responses:
 *       200: 
 *         description: Client Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Client"
 *       500:
 *         description: Client could not be created     
 */
router.post("/client", validateClient, createClient);

/**
 * @swagger
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: String,
 *        email: 
 *          type: String,
 *        telephone:
 *          type: String
 *          
 */
router.get("/client/get-all-clients", getClients);
router.get("/client/edit-client/:id", getOneClient);
router.patch("/client/update-client/:id", updateClient);


/**
 * @swagger
 * /category:
 *   delete:
 *     summary: Delete Client
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Client"
 *     responses:
 *       200: 
 *         description: Client Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Client"
 *       500:
 *         description: Client could not be deleted     
 */
router.delete("/client/delete-client/:id", deleteClient);

/**
 * @swagger
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: String,
 *        email: 
 *          type: String,
 *        telephone:
 *          type: String
 *          
 */




module.exports = router;



