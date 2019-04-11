const orm = require('../orm'); 

const Request = orm.Model.extend({
    tableName: 'request',
    hasTimestamps: true,
    users: function() {
        return this.belongsTo('Users');
    }
});

module.exports = orm.model('Request', Request);