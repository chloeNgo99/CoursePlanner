const Pool = require("pg").Pool;

const pool = new Pool({
    user: "chloengo",
    password: "Meoluoi1704!",
    host: "localhost",
    port: 5422,
    database: "planschedule"
});

module.exports = pool;