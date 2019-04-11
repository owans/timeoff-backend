const faker = require('faker');

const generateData = (count, user_id) => {
    const data = [];

    for (let i = 0; i < count; i++) {
        const user = {
            user_id,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email().toLowerCase(),
        }

        data.push(user);
    }

    return data;
}

module.exports = {
    gen: generateData
};