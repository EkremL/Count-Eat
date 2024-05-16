const express = require("express");
const router = express.Router();
const Ingredient = require("../Models/Ingredient.js");

//! Get (Read All)
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();

    res.status(200).json(ingredients);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
