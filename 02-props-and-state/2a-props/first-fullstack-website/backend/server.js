// import necessary modules
const express = require("express");
const cors = require("cors");
const server = express();
const connectDB = require("./config/connectDB");
const logger = require("morgan");
// initialize the port
const PORT = 3313;
// import routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger("dev"));

// routes
server.get("/", (req, res) => {
  res.send("Welcome to the backend server");
});
server.use("/api/products", productRoutes);
server.use("/api/users", userRoutes);

// run the server and connect to the database
server.listen(PORT, () => {
  console.log(`the server is running in port:${PORT}`);
  connectDB();
});
