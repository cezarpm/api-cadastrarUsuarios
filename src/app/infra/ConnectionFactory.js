const mysql = require('mysql');

const createConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB
    })

    connection.connect(err => {
        if (err) console.log(err);
        console.log('Conectou');
    })

    return connection;
}

module.exports = createConnection;
