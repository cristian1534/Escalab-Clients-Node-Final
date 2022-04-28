const mongoose = require("mongoose");


const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED");
  } catch (err) {
    console.log("DB CONNECTION ERR", err);
    process.exit(1);
  }
};

module.exports = connectionDB;