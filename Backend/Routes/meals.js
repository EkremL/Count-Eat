const express = require("express");
const router = express.Router();
const Recipe = require("../Models/Recipe.js");

//!Get all meals
router.get("/", async (req, res) => {
  const { calories, meals, genre } = req.query;
  const maxCalories = parseInt(calories, 10) + 30;

  try {
    let allRecipes;
    if (genre === "normal") {
      allRecipes = await Recipe.find({});
    } else {
      allRecipes = await Recipe.find({ Genre: genre });
    }

    const selectedRecipes = [];
    let totalCalories = 0;

    while (totalCalories < maxCalories) {
      const randomIndex = Math.floor(Math.random() * allRecipes.length);
      const selectedRecipe = allRecipes[randomIndex];

      const doubledCalories = selectedRecipe.Calorie * 2;

      if (totalCalories + doubledCalories <= maxCalories) {
        const updatedRecipe = {
          ...selectedRecipe.toObject(),
          Calorie: doubledCalories,
        };
        selectedRecipes.push(updatedRecipe);
        totalCalories += doubledCalories;
      } else {
        break;
      }
    }

    const mealsArray = Array.from({ length: meals }, () => []);
    for (let i = 0; i < selectedRecipes.length; i++) {
      mealsArray[i % meals].push(selectedRecipes[i]);
    }

    res.status(200).json(mealsArray);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

//!Fetch a single food
router.get("/regenerate", async (req, res) => {
  const { calories, genre } = req.query;
  const maxCalories = parseInt(calories, 10);

  try {
    let allRecipes;
    if (genre === "normal") {
      allRecipes = await Recipe.find({});
    } else {
      allRecipes = await Recipe.find({ Genre: genre });
    }

    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const selectedRecipe = allRecipes[randomIndex];

    if (selectedRecipe.Calorie <= maxCalories) {
      res.status(200).json(selectedRecipe);
    } else {
      res.status(400).json({ error: "No suitable recipe found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
