const bcrypt = require('bcrypt');

const passwordCompare = (password, user) => {
    let senha = bcrypt.compareSync(password, user.passwordHas);

    return senha;
}

module.exports = passwordCompare;
