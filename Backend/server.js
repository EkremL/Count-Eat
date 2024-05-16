const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const logger = require("morgan");
const cors = require("cors");

//!config
dotenv.config();

//!MainRoute import
const MainRoute = require("./Routes/index.js");

//!database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};

//!MiddleWares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", MainRoute);

app.listen(port, () => {
  connect();
  console.log(`Server ${port} portunda çalısıyor.`);
});
