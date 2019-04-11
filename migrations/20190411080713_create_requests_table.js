exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('requests');
        if (!tableExists) {
            return knex.schema.createTable('requests', function (table) {
                table.increments();
                table.string('user_id').notNullable();
                table.string('request_type').notNullable();
                table.string('start_date').notNullable();
                table.string('end_date').notNullable();
                table.string('request_status').notNullable();
                table.timestamps();
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

