'use strict';

const Note = require('./lib/notes');
const Input = require('./lib/input');
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

mongoose.connect('mongodb://localhost:27017/notes', options);


const input = new Input();
const note = new Note(input);

note.execute(this.object);