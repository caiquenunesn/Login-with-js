
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments();

        table.uuid('id').primary();
        table.string('name').notNullable();
        table.string('email', 'uid').unique().notNullable();
        table.string('password', 255).notNullable();
        table.string('salt', 255).notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
  
};
