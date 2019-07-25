const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    // host: 'db4free.net',
    user: 'NurJC07',
    password: '1234abcd',
    database: 'travel',
    port: 3306
});

module.exports = conn;