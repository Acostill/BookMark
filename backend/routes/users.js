const express = require('express');
const router = express.Router();
const bookmarkDb = require("../db/queries");
const { loginRequired } = require("../auth/helpers");

/* Get Requests */
router.post('/register', bookmarkDb.authQueries.registerUser);
router.post('/login', bookmarkDb.authQueries.loginUser);
router.post('/logout', bookmarkDb.authQueries.logoutUser);

module.exports = router;
