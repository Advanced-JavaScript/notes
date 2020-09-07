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
    it('The validate() method should return true when receives the right command', () => {
        const input = new Input();
        expect(input.validate('add')).toEqual('add');
        expect(input.validate('a')).toEqual('a');
    });
    it('Should return an object contains the correct action and payload value', () => {
        const input = new Input();
        expect(input.action).toEqual('add');
        expect(input.payload).toEqual('note to be tested')
    });
    it('Should return invalid command when receives a wrong command', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const input = new Input();
        input.validate('notAdd');
        expect(consoleSpy).toHaveBeenCalledWith('Invalid Command');
    });
})