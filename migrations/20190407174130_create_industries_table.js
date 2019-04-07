
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('industries');
        if (!tableExists) {
            return knex.schema.createTable('industries', function (table) {
                table.increments();
                table.string('name').notNullable();
            });
        } else {
            console.log('Table already exist');
        }
      } catch (error) {
          console.log(error);
      }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('organizations');
};
