'use strict';

const minimist = require('minimist');

class Input {
    constructor() {
        const argv = minimist(process.argv.slice(2));
        this.evaluate(argv);
    }

    evaluate(argv) {
        Object.keys(argv).forEach(key => {
            switch (key) {
                case 'a':
                case 'add':
                    this.action = 'add';
                    this.payload = argv[key];
                    break;

                case 'c':
                case 'category':
                    this.category = argv[key];
                    break;

                case 'l':
                case 'list':
                    this.action = 'list';
                    this.category = argv[key];
                    break;

                case 'd':
                case 'delete':
                    this.action = 'delete';
                    this.noteId = argv[key];
                    break;

                default:
                    if (key != '_') {
                        this.action = this.validate(key);
                    }
                    break;
            }
        });

    }

    validate(action) {
        const valid = /(a|add|list|l|category|c|delete|d)\b/i;
        if (valid.test(action)) {
            return action;
        }
        console.log('Invalid Command');
        return null;
    }

}

module.exports = Input;