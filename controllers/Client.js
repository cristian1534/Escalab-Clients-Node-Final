const Model = require("../models/Client");

exports.createClient = async (req, res) => {
  try {
    const newClient = await new Model({
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone,
      id: req.body.id,
    });
    newClient.save();
    res.status(200).send("Client Created");
  } catch (err) {
    res.status(500).send("Client could not be created", err);
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Model.find({});
    res.status(200).send(clients);
  } catch (err) {
    res.status(404).send("Clients could not be found", err);
  }
};
exports.getOneClient = async (req, res) => {
  try {
    const client = await Model.findOne({ id: req.params.id });
    res.status(200).send(client);
  } catch (err) {
    res.status(404).send("Client not found", err);
  }
};

exports.updateClient = async (req, res) => {
  try {
    await Model.findOneAndUpdate(
      { id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
      }
    );
    res.status(200).send("Client Modified");
  } catch (err) {
    res.status(500).send("Client could not be updated", err);
  }
};

exports.deleteClient = async (req, res) => {
  try {
    await Model.findOneAndDelete({ id: req.params.id });
    res.status(200).send("Client Deleted");
  } catch (err) {
    res.status(500).send("Client could not be deleted", err);
  }
};
