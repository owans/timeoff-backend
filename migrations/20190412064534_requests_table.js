exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('requests');
        if (!tableExists) {
            return knex.schema.createTable('requests', function (table) {
                table.increments();
                table.integer('user_id').notNullable();
                table.integer('organization_id').notNullable();
                table.string('employee_id',).notNullable();
                table.string('request_type', 100).default('causal');
                table.string('relief_employee_id').nullable();
                table.text('notes').nullable();
                table.date('start_date').notNullable();
                table.date('end_date').notNullable();
                table.integer('duration').notNullable();
                table.timestamps();

                table.index('request_type');
            });
        } else {
            console.log('Table already exist');
            process.exit(1);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
};
