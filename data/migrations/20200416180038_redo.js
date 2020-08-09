exports.up = function (knex) {
  return (
    knex.schema
      // recipes
      .createTable("Recipes", (tbl) => {
        tbl.increments();

        tbl.string("RecipeName", 255).notNullable().unique();
      })

      // Ingredients
      .createTable("Ingredients", (tbl) => {
        tbl.increments();

        tbl.string("IngredientName", 255).notNullable();
        tbl.string("IngredientAmount", 255).notNullable();

        // foreign key
        tbl
          .integer("recipe_id")
          .notNullable()
          .references("id")
          .inTable("Recipes")
          .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
          .onUpdate("CASCADE");
      })

      // Steps
      .createTable("Steps", (tbl) => {
        tbl.increments("id");

        tbl.string("Steps", 255).notNullable();

        // foreign key
        tbl
          .integer("recipe_id")
          .notNullable()
          .references("id")
          .inTable("Recipes")
          .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Recipes")
    .dropTableIfExists("Steps")
    .dropTableIfExists("Ingredients");
};
