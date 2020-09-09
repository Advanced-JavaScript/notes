'use strict';

const schema = require('./notes-schema');

class Collection {

    constructor() {
    }

    get(category) {
        if (category) {
            return schema.find(category);
        } else {
            return schema.find();
        }
    }

    create(record) {
        let note = new schema(record);
        return note.save();
    }

    update(_id, record) {
        return schema.findByIdAndUpdate(_id, record, {new: true});
    }

    delete(_id) {
        return schema.findByIdAndDelete(_id);

    }
}

module.exports = new Collection();