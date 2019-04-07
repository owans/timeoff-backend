const Repository = require('./repository');
const model = require('../models/employee');

module.exports = class EmployeeRepository extends Repository {
    constructor() {
        super(model);
    }
}