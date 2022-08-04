// get the client
const mysql = require('mysql2/promise');

// 设计模式
// 单例模式
let connection = null

async function getMysql() {
    // console.log(connection)
    if (connection) {
        console.log(2)
        return connection;
    }
    console.log(1)
    connection = await mysql.createConnection({
        host: '120.55.191.8',
        user: 'root',
        password: '!QAZ@WSX',
        database: 'nodejs-teacher'
    });
    return connection;
}

async function getUserById(username) {
    const ins = await getMysql();
    const [rows, fields] = await ins.execute('select * from `user` where `username` = ?', [username])
    // console.log(rows)
    return rows
}


module.exports = {
    getUserById
}

// create the connection to database


// // simple query
// connection.query(
//     'SELECT * FROM user',
//     function (err, results, fields) {
//         console.log(err)
//         console.log(results); // results contains rows returned by server
//         //console.log(fields); // fields contains extra meta data about results, if available
//     }
// );
