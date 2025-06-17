const pool = require ('./connection.js')
const fs = require('fs').promises
const Tables = require ('./tables.js')

class Migration {
    static async usersData () {
        let data = await fs.readFile('./data/users.json', 'utf-8')
        let parsedData = JSON.parse(data)

        for (const el of parsedData) {
            const {id, name, email, gender, join_at} = el
            let query =
                `INSERT INTO "Users" (id, name, email, gender, join_at)
                VALUES ($1, $2, $3, $4, $5)`
            await pool.query(query, [id, name, email, gender, join_at])
        }
    }

    static async ordersData () {
        let data = await fs.readFile('./data/orders.json', 'utf-8')
        let parsedData = JSON.parse(data)

        for (const el of parsedData) {
            const {id, product, description, price, last_update, UserId} = el
            let query =
                `INSERT INTO "Orders" (id, product, description, price, last_update, "UserId")
                VALUES ($1, $2, $3, $4, $5, $6)`
            await pool.query(query, [id, product, description, price, last_update, UserId])
        }
    }
}


async function doMigration () {
   try {
    await Tables.deleteTables("Users")
    await Tables.deleteTables("Orders")
    await Tables.createTableUsers()
        console.log('tables Users created')
    await Tables.createTableOrders ()
        console.log('tables Orders created')
    await Migration.usersData()
        console.log('data users inserted')
    await Migration.ordersData()
        console.log('data orders inserted')
   }catch(err) {
        console.log(err.message)
   }
}
doMigration()