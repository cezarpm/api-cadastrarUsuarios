const tableUsers = `CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    usename varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    passwordHas varchar(255) NOT NULL,
    PRIMARY KEY( id )
    );`

const createTables = connection => {
    connection.query(tableUsers, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    })
}

module.exports = createTables