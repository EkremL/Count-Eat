const express = require("express");
const router = express.Router();

// Diğer router dosyalarını içeri aktarma

const ingredientRoute = require("./ingredients.js");
const recipeRoute = require("./recipes.js");

//her routeyi yol altında kullanma
router.use("/ingredients", ingredientRoute);
router.use("/recipes", recipeRoute);

module.exports = router;
