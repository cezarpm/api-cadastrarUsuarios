const UserDAO = require('../infra/UsersDAO');
const connectionFactory = require('../infra/ConnectionFactory');
const connection = connectionFactory();

const user = new UserDAO(connection);

module.exports = {
    index(req, res) {
        user.index()
            .then(users => {
                console.log(users);
                res.status(200).json(users)

            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)

            })
    },

    store(req, res) {

    }
}

