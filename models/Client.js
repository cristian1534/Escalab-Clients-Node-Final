const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  telephone: String,
});

module.exports = mongoose.model("Client", clientSchema);
