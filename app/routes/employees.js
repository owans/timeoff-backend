const routes = require('express').Router();
const controller = require('../controllers/employee');

routes.get('/', controller.getAllEmployees);

module.exports = routes;