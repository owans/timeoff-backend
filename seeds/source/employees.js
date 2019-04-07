const faker = require('faker');
const moment = require('moment');

const generateData = (count, organization_id) => {
    const data = [];
    const endDate = moment('2001-12-31').toDate();
    const startDate = moment('1966-01-01').toDate();
    const genders = ['male', 'female', 'binary', 'undefined', 'n/a'];
    const depts = ['Software Engineering', 'Marketing', 'HR', 'Operations', 'Legal', 'Sales'];
    const randNo = (n) => (Math.floor(Math.random() * n) + 0);

    for (let i = 0; i < count; i++) {
        const randDate = faker.date.between(startDate, endDate);
        const dob = moment(randDate).format('YYYY-MM-DD');
        const employee = {
            organization_id,
            employee_id: `lu-${faker.random.alphaNumeric(5).toLowerCase()}`,
            first_name: faker.name.firstName(),
            middle_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            gender: genders[randNo(5)],
            dob,
            phone: Math.floor(Math.random() * 9000000000) + 1000000000,
            email: faker.internet.email().toLowerCase(),
            department: depts[randNo(6)],

        }

        data.push(employee);
    }

    return data;
}

module.exports = {
    gen: generateData
};