const faker = require('faker');

const generateData = (count) => {
    const data = [];
    const industries = [
        'Construction',
        'IT / Technology',
        'FCMG',
        'Banking & Financial Service',
        'Automotive',
        'Agriculture',
        'Manufacturing',
        'Education',
        'Oil & Gas',
        'Transportation',
        'Real Estate',
        'Hospitality',
        'Telecommunications'
    ];
    const randNo = (n) => (Math.floor(Math.random() * n) + 1);

    for (let i = 0; i < count; i++) {
        const industry = industries[randNo(12)];
        const org = {
            name: faker.company.companyName(),
            industry,
            rc_number: `RC-${faker.random.number(10000)}`,
            email: faker.internet.email().toLowerCase(),
            street_address: faker.address.streetAddress(),
            city_town: faker.address.city(),
            country: faker.address.country(),
            website: faker.internet.url(),
            phone: faker.phone.phoneNumber()
        }

        data.push(org);
    }

    return data;
}

module.exports = {
    gen: generateData
};