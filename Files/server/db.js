const Pool = require("pg").Pool;

const pool = new Pool({
    user: "",
    password: "",
    host: "localhost",
    port: ,
    database: "planschedule"
});

module.exports = pool;
