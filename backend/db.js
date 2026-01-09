const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/CloudNotebook";

const connectToMongo = async () => {
  try {
    // No more callback function inside .connect()
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Stop the server if the database fails
  }
};

module.exports = connectToMongo;
