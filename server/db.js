const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "All1Star36251!",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;