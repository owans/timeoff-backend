const faker = require('faker');
const moment = require('moment');

const generateData = (count) => {
    const data = [];
    
    const startDate = moment([year, month - 1]);
    const endDate = moment(startDate).endOf('month');

    return {start: startDate, end: endDate}

    const timeOffTypes = ['Maternity_leave', 'Paternity_leave', 'Holidays', 'Time_Off', 'Study_leave', 'Sick_Leave', 'Travel', 'Extra_Time', 'Others'];

    const requestStatus = ['Approved', 'Rejected', 'Expired' ]
    const randNo = (n) => (Math.floor(Math.random() * n) + 0);

    for (let i = 0; i < count; i++) {
        const request = {
            request_type: timeOffTypes[randNo(8)],
            startDate,
            endDate,
            request_status: requestStatus
        }

        data.push(request);
    }

    return data;
}

module.exports = {
    gen: generateData
};