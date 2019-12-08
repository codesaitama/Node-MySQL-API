'user strict';
let mysql = require('mysql');
//require('custom-env').env()

//local mysql db connection
let connection = mysql.createConnection({
    host: 'localhost',//process.env.DB_HOST,
    user: 'root',//process.env.DB_USER,
    password: 'Emmajay!2',//process.env.DB_PASSWORD,
    database: 'electronjsdb'//process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.on('error', function(err) {
    console.log("[mysql error]", err);
});

module.exports = connection;
