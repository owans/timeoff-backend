const orm = require('../orm');

const Organization = orm.Model.extend({
    tableName: 'organziations',
    hasTimestamps: true,
    employees: function() {
        return this.hasMany('Employeee');
    },
    industry: function() {
        return this.belongsTo('Industry');
    }
});

module.exports = org.model('Organization', Organization);