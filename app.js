let command = process.argv[2]
let input = process.argv.slice(3);
let Controller = require('./mvc/contollers/controlers.js')

switch (command) {
    case "read":
        Controller.requestRead(input)
    break
    case "find":
        Controller.requestFindUserById(input[0])
    break
    default:
        console.log('Unknown command');
}
