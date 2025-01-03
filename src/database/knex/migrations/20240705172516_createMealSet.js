exports.up = (knex) =>
  knex.schema.createTable("meal_set", (table) => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.text("type");
    table.text("value");
    table.integer("user_id").references("id").inTable("users");
    table.text("meal_image").nullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("meal_set");
