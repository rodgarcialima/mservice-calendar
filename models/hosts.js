const Model = require('./model');

class HostModel extends Model {
    constructor(...args) {
        super(...args);
    }

    static migrate(crate) {
        return crate.create(HostModel.schema);
    }
}

HostModel.tableName = 'calendar.hosts';
HostModel.schema = {
    [HostModel.tableName]: {
        'id': 'integer primary key',
        'external_id': 'string primary key',
        'name': 'string'
    }
};

module.exports = HostModel;