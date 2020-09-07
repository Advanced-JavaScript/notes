'use strict';

const minimist = require('minimist');

class Input {
    constructor() {
        const argv = minimist(process.argv.slice(2));
        this.action = this.validate(Object.keys(argv)[1]);
        this.payload = this.evaluate(argv.a || argv.add);
    }

    evaluate(response) {
        if (response) {
            this.action = 'add';
            return response;
        } else {
            this.action = 'add';
            return null;
        }
    }

    validate(action) {
        const valid = /(a|add)\b/;
        if (valid.test(action)) {
            return action;
        }
        console.log('Invalid Command');
    }

}

module.exports = Input;