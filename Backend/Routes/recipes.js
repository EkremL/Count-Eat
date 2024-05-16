const express = require("express");
const router = express.Router();

//! Get (Read All)
router.get("/", async (req, res) => {
  res.send("Tarifler Getirildi.");
});

module.exports = router;
