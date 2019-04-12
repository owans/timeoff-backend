exports.up = async function(knex, Promise) {
    try {
      const tableExists = await knex.schema.hasTable('organizations');
      if (!tableExists) {
          return knex.schema.createTable('organizations', function (table) {
              table.increments();
              table.string('name').notNullable();
              table.string('rc_number').nullable();
              table.integer('industry_id').notNullable();
              table.string('email').notNullable();
              table.integer('size').default(0);
              table.string('street_address').nullable();
              table.string('city_town').nullable();
              table.string('state').nullable();
              table.string('country').default('Nigeria');
              table.string('website').nullable();
              table.string('phone').nullable();
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
      return knex.schema.dropTableIfExists('organizations');
  };
  