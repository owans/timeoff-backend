const EmployeeRepository = require('../../data/repositories/employee');
const repository = new EmployeeRepository();

module.exports = {
    getAllEmployees: (req, res) => {
        repository.all()
            .then(results => {
                res.json(results)
            })
            .catch(error => {
                res.status(400);
                res.json({ message: error.message });
            })
    }
}