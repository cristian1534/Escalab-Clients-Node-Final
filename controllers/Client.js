const Model = require("../models/Client");

exports.create = async (req, res) => {
  try {
    const newClient = await new Model({
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.email,
      id: req.body.id,
    });
    newClient.save();
    res.send("Client created.");
  } catch (err) {
    res.send(err);
  }
};
