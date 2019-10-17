const UserDAO = require('../infra/UsersDAO');
const UserModel = require('../models/User');


const connectionFactory = require('../infra/ConnectionFactory');
const connection = connectionFactory();

const userConnection = new UserDAO(connection);

module.exports = {
    store(req, res) {
        const { id, username, email, password } = req.body;

        const user = new UserModel(id, username, email, password)

        userConnection.registrar(user)
            .then(user => {
                console.log(user);
                res.status(200).json(user)

            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)

            })
    },
}

