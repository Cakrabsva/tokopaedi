const {Users, Orders} = require('./moldels.js')
const View = require('./views.js')

class Controller {
    static async requestRead (input) {
        try{
            switch (input) {
                case 'Users':
                    let userData = await Users.readDataUsers()
                    View.displayReadData(userData)
                break;
                case 'Orders':
                    let orderData = await Orders.readDataOrders()
                    View.displayReadData(orderData)
                break;
                default:
                    console.log('unknown command')
            }
            
        }catch(err) {
            View.displayError(err)
        }
        
    }

}

module.exports = Controller