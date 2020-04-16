exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Ingredients").insert([
        {
          id: 1,
          IngredientName: "TEST",
          IngredientAmount: "TEST",
          recipe_id: 1,
        },
      ]);
    });
};
