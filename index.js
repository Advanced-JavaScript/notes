'use strict';

const Note = require('./lib/notes');
const Input = require('./lib/input');

const input = new Input();
const note = new Note(input);

note.execute(this.object);