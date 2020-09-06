'use strict';

function Note(obj){
    this.action = obj.action;
    this.payload = obj.payload;
}

Note.prototype.execute = function(){
    if(this.action === 'add'){
        this.add();
    }
}

Note.prototype.add= function(){
    let note = {
        ['ID'] : Math.floor(Math.random() * 1000),
        ['Note'] : this.payload
    };
    if(note.Note){
        console.log('Adding Note:', note.Note);  
    }
}

module.exports = Note;