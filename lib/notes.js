'use strict';

const mongoose = require('mongoose');
const collection = require('./model/notes-collection');

class Note {
    constructor(obj) {
        this.action = obj.action;
        this.payload = obj.payload;
        this.category = obj.category;
        this.id = obj.noteId;
    }

    async execute() {
        if (this.action === 'add') {
            this.add();
        } else if (this.action === 'delete') {
            this.delete();
        } else if (this.action === 'list') {
            this.list();
        }
    }

    async add() {
        let note = {
            text: this.payload,
            category: this.category
        };
        const mongoAdd = async (note) => {
            const newNote = await collection.create(note);
            console.log('Note Saved: ', newNote.text);
            mongoose.disconnect();
        }
        mongoAdd(note);
        
    }

    delete() {
        const mongoDel = async () => {
            const deletedNote = await collection.delete({_id: this.id })
            console.log('Deleted Note: ', deletedNote.text, ' ID:',deletedNote._id);
            mongoose.disconnect();
        }
        mongoDel();
    }

    list() {
        const mongoList = async () => {
            let allNotes = await collection.get();
            if(this.category !== true){
                allNotes = await collection.get({category: this.category});
            } 
            allNotes.forEach( note => {
                console.log(note.text, '\n', 'Category:', note.category,' ID:', note._id );
                console.log('--------------------------------------------');
            });
            mongoose.disconnect();
        }
        mongoList();
        
    }

}

module.exports = Note;