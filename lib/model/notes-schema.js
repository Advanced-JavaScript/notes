'use strict'
const mongoose = require('mongoose');

const note = new mongoose.Schema({
    text: {type: 'string', required: true},
    category: {type: 'string', required: true}
});

module.exports = mongoose.model('note', note);