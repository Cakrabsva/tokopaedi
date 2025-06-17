const pool = require('../dataBase/connection.js')

class Users {
    constructor(id, name, email, gender, joinAt) {
        this.id = id
        this.name = name
        this.email = email
        this.gender = gender
        this.joinAt = joinAt
    }
    static async readDataUsers () {
        let query = `SELECT * FROM "Users"`
        let result = await pool.query(query)
        let instanceData = result.rows.map((el) => {
        let {id, name, email, gender, join_at} = el
            return new Users (id, name, email, gender, join_at)
        })
        return instanceData
    }
}

class Orders {
    constructor (id, product, description, price, lastUpdate, UserId,UserName) {
        this.id = id
        this.product = product
        this.description = description
        this.price = price
        this.lastUpdate = lastUpdate
        this.UserId = UserId
        this.UserName = UserName

    }
    static async readDataOrders () {
        let query = `SELECT * FROM "Orders"
        LEFT JOIN "Users"
        ON "Orders"."UserId" = "Users"."id"`
        let result = await pool.query(query)
        let instanceData = result.rows.map((el) => {
        let {id, product,description, price, last_update,UserId,name} = el
            return new Orders (id, product,description, price, last_update,UserId, name)
        })
        return instanceData
    }
}

module.exports = {Users, Orders}