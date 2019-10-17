const UserDAO = require('../infra/UsersDAO');
const passwordCompareHelper = require('../helper/passwordCompareHelper');

const connectionFactory = require('../infra/ConnectionFactory');
const connection = connectionFactory();

const userConnection = new UserDAO(connection);

module.exports = {

    login(req, res) {

        const { email, password } = req.body;

        userConnection.login(email)
            .then(user => {

                let senha = passwordCompareHelper(password, user[0])

                if(senha) console.log('deu certo');
                if(!senha) console.log('senha errada campeao');

                res.status(200).json(user);

            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);

            })
    }
}