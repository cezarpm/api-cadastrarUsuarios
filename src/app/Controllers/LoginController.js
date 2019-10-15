const UserDAO = require('../infra/UsersDAO');

const connectionFactory = require('../infra/ConnectionFactory');
const connection = connectionFactory();

const userConnection = new UserDAO(connection);

module.exports = {

    login(req, res) {

        const { email, password } = req.body;

        userConnection.login(email, password)
            .then(user => {
                console.log(user);
                res.status(200).json(user);

            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);

            })
    }
}