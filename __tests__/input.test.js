'use strict';

const Input = require('../lib/input');
const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(()=> {
    return {
        add: 'note to be tested'
    };
});

describe('Input Module', () => {
    const input = new Input();
    it('The validate() method should return true when receives the right adding command', () => {
        expect(input.validate('add')).toEqual('add');
        expect(input.validate('a')).toEqual('a');
    });
    it('The validate() method should return true when receives the right category command', () => {
        expect(input.validate('category')).toEqual('category');
        expect(input.validate('c')).toEqual('c');
    });
    it('The validate() method should return true when receives the right listing command', () => {
        expect(input.validate('list')).toEqual('list');
        expect(input.validate('l')).toEqual('l');
    });
    it('The validate() method should return true when receives the right deleting command', () => {
        expect(input.validate('delete')).toEqual('delete');
        expect(input.validate('d')).toEqual('d');
    });
    it('Should return an object contains the correct action and payload value', () => {
        expect(input.action).toEqual('add');
        expect(input.payload).toEqual('note to be tested')
    });
    it('Should return invalid command when receives a wrong command', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        input.validate('notAdding');
        expect(consoleSpy).toHaveBeenCalledWith('Invalid Command');
    });
    it('Should assign the value of category when the action is c', () => {  
        input.evaluate({c : 'category'});
        expect(input.category).toEqual('category');
    });
    it('Should assign the value of category when the action is category', () => {
        input.evaluate({category : 'category'});
        expect(input.category).toEqual('category');
    });
    it('Should assign the value of category when the action is l', () => {  
        input.evaluate({l : 'list'});
        expect(input.category).toEqual('list');
        expect(input.action).toEqual('list');
    });
    it('Should assign the value of category when the action is list', () => {
        input.evaluate({list : 'list'});
        expect(input.category).toEqual('list');
        expect(input.action).toEqual('list');
    });
    it('Should assign the value of noteId when the action is d', () => {  
        input.evaluate({d : '12345'});
        expect(input.noteId).toEqual('12345');
        expect(input.action).toEqual('delete');
    });
    it('Should assign the value of noteId when the action is delete', () => {
        input.evaluate({delete : '12345'});
        expect(input.noteId).toEqual('12345');
        expect(input.action).toEqual('delete');
    });
    it('Should assign the value of null to action when the command does not exist', () => {
        input.evaluate({wrong : 'whatever'});
        expect(input.action).toEqual(null);
    });

})