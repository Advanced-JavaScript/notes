'use strict';

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Note Module', () => {
    it('Should return Nothing to the console if there was no command given', () => {
        const note = new Note({
            action: '',
            payload: 'whatever'
        });
        expect(console.log).not.toHaveBeenCalled();
    });
    it('If the command and data were both valid, the console shows the output.', () => {
        const note = new Note({
            action: 'add',
            payload: 'the note'
        });
        note.execute();
        expect(console.log).toHaveBeenCalled();
    });

});
