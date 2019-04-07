const express = require('express');
const app = express();
const employeeRouter = require('./app/routes/employees');

module.exports = () => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/employees', employeeRouter);

    return app;
}