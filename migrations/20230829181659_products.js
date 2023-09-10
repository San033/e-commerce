/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    // product name, id, description, rating
    table.uuid("id").primary().notNullable();
    table.string("product_name").notNullable();
    table.text("description").notNullable();
    table.string("rating").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
