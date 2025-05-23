const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {
  requireAuth,
  checkUser,
} = require("../src/middlewares/authMiddleware.js");
const authController = require("../src/controllers/authController");
const path = require("path");

//!config
dotenv.config();

//!Route imports
const MainRoute = require("./Routes/index.js");
const authRoutes = require("./Routes/authRoutes.js");
const adminRoutes = require("./Routes/adminRoutes.js");

//!database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

app.set("view engine", "ejs");

//!Middlewares
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_DOMAIN,
    credentials: true,
  })
);
// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

app.use("/api", MainRoute);
app.use("/", authRoutes);
app.use("/admin", requireAuth, adminRoutes);

//! Auth Routes
app.post("/signup", authController.signup_post);

app.get("*", checkUser);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Frontend/dist", "index.html"));
});

app.listen(port, () => {
  connect();
  console.log(`Server ${port} portunda çalışıyor.`);
});
