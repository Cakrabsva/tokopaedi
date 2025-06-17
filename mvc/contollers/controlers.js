const {Users, Orders} = require('../moldels.js')
const View = require('../views.js')

class Controller {
    static async requestRead (input) {
        try{
            switch (input[0]) {
                case 'Users':
                    let userData = await Users.readDataUsers(input)
                    View.displayReadData(userData)
                    
                break;
                case 'Orders':
                    let orderData = await Orders.readDataOrders()
                    View.displayReadData(orderData)
                break;
                default:
                    throw new Error(`Unknown Command "${input}"`)
            }
        }catch(err) {
            View.displayError(err)
        }
    }

    static async requestFindUserById (input) {
        try{
            let userData = await Users.findDataUsersById(input)
            View.displayUserDataById(userData)
        }catch (err) {
            View.displayError(err)
        }
    }
}

module.exports = Controller