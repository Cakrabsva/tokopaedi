class Users {
    constructor(id, name, email, gender, joinAt) {
        this.id = id
        this.name = name
        this.email = email
        this.gender = gender
        this.joinAt = joinAt
    }
}

class Orders {
    constructor (id, product, description, price, lastUpdate, UserID) {
        this.id = id
        this.product = product
        this.description = description
        this.price = price
        this.lastUpdate = lastUpdate
        this.UserID = UserID
    }
}

export { Users, Orders };