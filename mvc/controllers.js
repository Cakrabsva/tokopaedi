const { Users } = require("./moldels")

class Controllers {
    static async requestData(req, res) {
        let key = Object.keys(req.query)[0]
        let value = Object.values(req.query)[0]
        
        let dataUsers = await Users.readDataUsers(key, value)
        res.send(dataUsers)
    }
}

module.exports = Controllers