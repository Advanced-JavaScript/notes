'use strict';

class Note {
    constructor(obj) {
        this.action = obj.action;
        this.payload = obj.payload;
    }

    execute() {
        if (this.action === 'add') {
            this.add();
        }
    }

    add() {
        let note = {
            ['ID']: Math.floor(Math.random() * 1000),
            ['Note']: this.payload
        };
        if (note.Note) {
            console.log('Adding Note:', note.Note);
        }
    }

}

module.exports = Note;