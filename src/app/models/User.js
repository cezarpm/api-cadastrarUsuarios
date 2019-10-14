class User {
    constructor(id, user, email, password) {
        this.id = id;
        this.username = user;
        this.email = email;
        this.passwordHas = password;
    }
}

module.exports = User;