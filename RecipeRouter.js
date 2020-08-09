const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes().then((recipes) => {
    res.json(recipes);
  });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id).then((ingr) => {
    res.json(ingr);
  });
});

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id).then((step) => {
    res.json(step);
  });
});

module.exports = router;
