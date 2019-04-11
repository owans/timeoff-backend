//create employees table

exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('employees');
        if (!tableExists) {
            return knex.schema.createTable('employees', function (table) {
                table.increments();
                table.string('employee_id').notNullable();
                table.string('first_name').notNullable();
                table.string('middle_name').nullable();
                table.string('last_name').notNullable();
                table.enum('gender', ['male', 'female', 'binary', 'undefined', 'n/a']);
                table.date('dob').nullable();
                table.string('phone', 15).notNullable();
                table.string('email').nullable();
                table.string('department', 250);
                
                table.index('employee_id');
                table.index('first_name');
                table.index('last_name');
                table.unique('email');
                table.unique('employee_id');
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
    return knex.schema.dropTableIfExists('employees');
};


//create organizations table

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

  
//create employee organization

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


//create industries table

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

//create employees timestamps

exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('employees');
        if (tableExists) {
            return knex.schema.table('employees', function (table) {
                table.timestamps();
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
                table.dropTimestamps();
            });
        } else {
            console.log('Employees table does not exist');
            process.exit(1);
        }
  } catch (error) {
      console.log(error);
  }
};


//create users table

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
  

  //create request table


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
