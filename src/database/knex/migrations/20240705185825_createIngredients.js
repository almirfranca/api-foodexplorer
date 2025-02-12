exports.up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("user_id").references("id").inTable("users");
    table
      .integer("meal_id")
      .references("id")
      .inTable("meal_set")
      .onDelete("CASCADE");
  });

exports.down = (knex) => knex.schema.dropTable("ingredients");
