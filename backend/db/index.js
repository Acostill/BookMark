var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/bookmark";
var db = pgp(connectionString);

module.exports = db;