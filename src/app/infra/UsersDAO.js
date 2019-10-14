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

    store(user) {
        return new Promise((resolve, reject) => {
            this._connection.query('INSERT INTO users SET ?', user, (err, result) => {
                if (err) return reject(err);

                return resolve(result)
            })
        })
    }
}

module.exports = UserDAO;

