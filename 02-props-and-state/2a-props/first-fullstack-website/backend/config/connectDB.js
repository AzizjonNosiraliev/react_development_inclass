// importing mongoose and dotenv
const Mongoose = require("mongoose");
require("dotenv").config();

// connecting to the database
const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};

module.exports = connectDB;