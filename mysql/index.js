// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '43.155.87.204',
    user: 'root',
    database: 'mysql',
    password: 'EPzhY#pjw.down$'
});

// execute will internally call prepare and query
connection.execute(
    'select User,Host from user;',
    function (err, results, fields) {
        console.log(err)
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
        // If you execute same statement again, it will be picked from a LRU cache
        // which will save query preparation time and give better performance
    }
);