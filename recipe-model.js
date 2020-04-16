const db = require("./db-config");

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients").where({ id });
}

function getInstructions(id) {
  return db("steps").where({ id });
}
