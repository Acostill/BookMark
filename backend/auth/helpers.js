const bcrypt = require("bcryptjs");
const db = require("../db/index");

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
    "INSERT INTO users (username, password_digest, email) VALUES (${username}, ${password_digest}, ${email})",
    { username: req.body.username, password_digest: hash, email: req.body.email }
  );
}

function updatePass(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
    "Update users SET password_digest=${password} WHERE id=${id}",
    { id: req.user.id, password: hash }
  );
}

function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ status: "Please log in" });
  }
  return next();
}

module.exports = {
  comparePass,
  createUser,
  updatePass,
  loginRequired
};
