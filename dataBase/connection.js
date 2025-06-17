const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    password: 'Sunowl1811',
    host: 'localhost',
    port: 5432,
    database: 'tokopaedi',
    idleTimeoutMillis: 100
});

(async () => {
    try {
        console.log("connect");
    }catch(err) {
        console.log(err.message)
    }
    
})();

module.exports = pool