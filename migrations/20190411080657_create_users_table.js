exports.up = async function(knex, Promise) {
    try {
      const tableExists = await knex.schema.hasTable('users');
      if (!tableExists) {
          return knex.schema.createTable('users', function (table) {
              table.increments();
              table.string('first_name').notNullable();
              table.string('last_name').notNullable();
              table.string('email').notNullable();
              table.timestamps();
          });
      } else {
          console.log('Table already exist');
      }
    } catch (error) {
        console.log(error);
    }
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users');
  };
  