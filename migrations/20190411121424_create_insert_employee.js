exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('requests');
        if (tableExists) {
            return knex.schema.table('requests', function (table) {
                table.integer('employee_id').after('industry_id');
            });
        } else {
            console.log('Request table does not exist');
            process.exit(1);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.down = async function(knex, Promise) {
  try {
        const tableExists = await knex.schema.hasTable('requests');
        if (tableExists) {
            return knex.schema.table('requests', function (table) {
                table.dropColumn('employee_id');
            });
        } else {
            console.log('Request table does not exist');
            process.exit(1);
        }
  } catch (error) {
      console.log(error);
  }
};