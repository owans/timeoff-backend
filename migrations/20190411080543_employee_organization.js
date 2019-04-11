exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('employees');
        if (tableExists) {
            return knex.schema.table('employees', function (table) {
                table.integer('organization_id').after('id');
            });
        } else {
            console.log('Employees table does not exist');
            process.exit(1);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.down = async function(knex, Promise) {
  try {
        const tableExists = await knex.schema.hasTable('employees');
        if (tableExists) {
            return knex.schema.table('employees', function (table) {
                table.dropColumn('organization_id');
            });
        } else {
            console.log('Employees table does not exist');
            process.exit(1);
        }
  } catch (error) {
      console.log(error);
  }
};
