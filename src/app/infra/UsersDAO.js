class UserDAO {
    constructor(connection) {
        this._connection = connection;
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            this._connection.query(`SELECT * FROM users WHERE email = '${email}' AND passwordHas = '${password}'`, (err, result) => {
                if (err) return reject('Não foi possivel listar usuarios')

                return resolve(result)

            });
        })
    }

    registrar(user) {
        return new Promise((resolve, reject) => {
            this._connection.query('INSERT INTO users SET ?', user, (err, result) => {
                if (err) return reject(err);

                return resolve(result)
            })
        })
    }
}

module.exports = UserDAO;

