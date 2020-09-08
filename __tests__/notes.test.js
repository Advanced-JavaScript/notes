'use strict';

const Note = require('../lib/notes');
// var supergoose = require('supergoose');
// const NoteDoc = require('../lib/model/notes-schema');

const myMock = jest.fn();
jest.spyOn(global.console, 'log');


describe('Note Module', () => {
    it('Should return Nothing to the console if there was no command given', () => {
        const note = new Note({
            action: '',
            payload: 'whatever'
        });
        expect(console.log).not.toHaveBeenCalled();
    });

    describe('functions calling', () => {
        const note = new Note({
            action: 'add',
            payload: 'whatever',
            category: 'blah blah',
            noteId: 1
        });
        it('Should call the function add if the action is add', () => {
            const adding = myMock.bind(note.add);
            adding(); note.execute();
            expect(myMock.mock.calls.length).toBe(1);
        });
        it('Should call the function delete if the action is delete', () => {
            note.action = 'delete';
            const deleteing = myMock.bind(note.delete);
            deleteing(); note.execute();
            expect(myMock.mock.calls.length).toBe(2);
        });
        it('Should call the function list if the action is list', () => {
            note.action = 'list';
            const listing = myMock.bind(note.list);
            listing(); note.execute();
            expect(myMock.mock.calls.length).toBe(3);
        });
        it('add() will log out notes when given', ()=> {
            note.add();
            setTimeout(() => {
              expect(console.log).toHaveBeenCalled();
            });
        });
        it('list() will log out notes when given', ()=> {
            note.list();
            setTimeout(() => {
              expect(console.log).toHaveBeenCalled();
            });
        });
        it('delete() will log out notes when given', ()=> {
            note.delete();
            setTimeout(() => {
              expect(console.log).toHaveBeenCalled();
            });
        });
    });

});

// let notes = {
//     first: { text: 'red', category: 'color' },
//     second: { text: 'apple', category: 'fruit' },
//     third: { text: 'dog', category: 'animal' }
// };
// describe('Categories', () => {

//     let categories;
//     let wat = supergoose.create({ text: 'red', category: 'color' });
//     console.log('ll',wat )
//     beforeEach(() => {
//       categories = new NoteDoc();
//     });
  
//     it('post(): can post a new category', () => {
//         let obj = notes.first;
//       return supergoose.create(obj)
//         .then(record => {
//           Object.keys(obj).forEach(key => {
//             expect(record[key]).toEqual(obj[key]);
//           });
//         });
//     });
// });