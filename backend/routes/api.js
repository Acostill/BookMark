const express = require('express');
const router = express.Router();
const tmdb   = require('../api/tmdb');
const gbooks = require('../api/gbooks');

router.get('/tv/:id', tmdb.tvDetails);
router.get('/movie/:id', tmdb.movieDetails);
router.get('/book/:id', gbooks.getBookById);

module.exports = router;
