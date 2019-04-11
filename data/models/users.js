const orm = require('../orm'); 

const Users = orm.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    request: function() {
        return this.hasMany('request');
    }
});

module.exports = orm.model('Users', Users);