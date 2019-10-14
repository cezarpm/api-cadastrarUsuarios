class UserDAO {
    constructor(connection) {
        this._connection = connection;
    }

    index() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM users', (err, result) => {
                if (err) return reject('Não foi possivel listar usuarios')

                return resolve(result)

            });
        })
    }

    store(val) {
        return new Promise((resolve, reject) => {
            this._connection.query(`INSERT INTO users VALUES(${val})`, (err, result) => {
                if (err) return reject('Não foi possivel listar usuarios');

                return resolve(result)
            })
        })
    }
}

module.exports = UserDAO;

