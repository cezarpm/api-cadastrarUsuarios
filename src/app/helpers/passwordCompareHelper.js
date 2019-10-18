const bcrypt = require('bcrypt');

const passwordCompare = (password, user) => {
  const senha = bcrypt.compareSync(password, user.passwordHas);

  return senha;
};

module.exports = passwordCompare;
