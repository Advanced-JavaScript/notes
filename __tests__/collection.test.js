'use strict';

require('@code-fellows/supergoose');
const testNote = require('../lib/model/notes-collection');
const Note = require('../lib/notes.js');

const note = new Note({ payload: 'mango', category: 'fruit' });

jest.setTimeout(30000);

function compareProps(a, b) {
    for (const key in a) {
        expect(a[key]).toBe(b[key]);
    }
}
let notes = [
    { text: 'mango', category: 'fruit' },
    { text: 'apple', category: 'fruit' },
    { text: 'dog', category: 'animal' }
];

describe('Database', () => {


    it('Should save to the database', () => {
        return testNote.create(note).then(newNote => {
            expect(newNote).toBeDefined();
            expect(newNote.category).toBe(note.category);
            expect(newNote.text).toBe(note.payload);
        });
    });
    it('can get all notes', () => {
        notes.forEach(note => {
            return testNote.create(note).then(async () => {
                const getNotes = await testNote.get();
                expect(getNotes.length).toBe(3);
                compareProps(notes[0], getNotes[0]);
                compareProps(notes[1], getNotes[1]);
                compareProps(notes[2], getNotes[2]);
            })
        });
    });
    it('should get all notes that belongs to a specific category', async () => {
        notes.forEach(note => {
            return testNote.create(note).then(async () => {
                const getNotes = await testNote.get({category:'fruit'});
                expect(getNotes.length).toBe(2);
                compareProps(notes[0], getNotes[0]);
                compareProps(notes[1], getNotes[1]);
            });
        });
    });
    it('should delete a note by knowing its id', async () => {
        return testNote.create(notes[0]).then(async (newNote) => {
            await testNote.delete(newNote._id);
            const deletedNote = await newNote.get({_id:newNote._id});
            expect(deletedNote.length).toBe(0);
        });
    });
});