'use strict';

const schema = require('./notes-schema');

class Collection {

    constructor() {

    }

    get(_id) {
        if (_id) {
            return schema.find(_id);
        }
        return schema.find();
    }

    create(record) {
        let note = new schema(record);
        note.save();
    }

    update(_id) {
        schema.findByIdAndUpdate(_id)
    }

    delete(_id) {
        schema.findByIdAndDelete(_id);

    }
}
module.exports = Collection;