let command = process.argv[2]
let input = process.argv.slice(3);
let Controller = require('./mvc/controlers.js')

switch (command) {
    case "read":
        Controller.requestRead(input[0])
    break
    default:
        console.log('Unknown command');
}
