const express = require("express");
const router = express.Router();
const Recipe = require("../Models/Recipe.js");

//! Get (Read All)
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
