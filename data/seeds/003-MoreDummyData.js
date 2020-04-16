exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Steps").insert([
        { id: 1, Steps: "TEST STEP", recipe_id: 1 },
      ]);
    });
};
