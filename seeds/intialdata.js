
const industries = require('./source/industries');
const organizations = require('./source/organizations');
const employees = require('./source/employees');

const createOrganization = (knex, org, industry) => {
  return knex('industries').where('name', industry).first()
    .then(industryRecord => {
      delete org.industry;
      org['industry_id'] = industryRecord.id;
      return knex('organizations').pluck('id').insert(org);
    });
}

const createEmployees = (knex, employees) => knex('employees').insert(employees);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('industries').del()
    .then(function () {
      return knex('organizations').del();
    })
    .then(function () {
      return knex('employees').del();
    })
    .then(function () {
      return knex('industries').insert(industries);
    })
    .then(function () {
      let orgPromises = [];
      const orgs = organizations.gen(10);

      orgs
        .forEach(org => {
           const industry = org.industry;
           orgPromises.push(createOrganization(knex, org, industry));
        });

      return Promise.all(orgPromises);
    })
    .then(function(organizations) {
      const employeePromises = [];
      organizations
        .map(orgID => {
          return {
            employees: employees.gen(10, orgID)
          }
        })
        .forEach(orgEmployees => {
          employeePromises.push(createEmployees(knex, orgEmployees.employees));
        });

      return Promise.all(employeePromises);
    });
};

