const orm = require('../orm');

const Industry = orm.Model.extend({
    tableName: 'industries',
    hasTimestamps: false,
    organization: function () {
        return this.hasMany('Organization');
    }
});

module.exports = org.model('Industry', Industry);