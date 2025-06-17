const pool = require ('./connection.js')

class Tables {
    static async createTableUsers () {
        let query = 
        `CREATE TABLE IF NOT EXISTS "Users" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(20) NOT NULL,
            email VARCHAR UNIQUE NOT NULL,
            gender VARCHAR(20) NOT NULL,
            join_at TIMESTAMP NOT NULL
        );`
        await pool.query(query)
    }

    static async createTableOrders () {
        let query = 
        `CREATE TABLE IF NOT EXISTS "Orders" (
            id SERIAL PRIMARY KEY,
            product VARCHAR NOT NULL,
            description TEXT UNIQUE NOT NULL,
            price FLOAT NOT NULL,
            last_update TIMESTAMP NOT NULL,
            "UserId" INT,
            CONSTRAINT fk_user 
                FOREIGN KEY ("UserId")
                REFERENCES "Users" ("id")
                ON DELETE CASCADE
        );`
        await pool.query(query)
    }

    static async deleteTables(table) {
        let query = `
        DROP TABLE IF EXISTS "${table}" CASCADE;`
        await pool.query(query)
    }
}

module.exports = Tables
