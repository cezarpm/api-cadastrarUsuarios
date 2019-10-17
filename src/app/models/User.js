const bcrypt = require('bcrypt');

class User {
    constructor(id, user, email, password) {
        this.id = id;
        this.username = user;
        this.email = email;
        this.passwordHas = bcrypt.hashSync(password, 8);
    }


}

module.exports = User;