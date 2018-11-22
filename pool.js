const mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: '',
    database: 'ifengtest',
    connectionLimit: 10
});

module.exports = pool;