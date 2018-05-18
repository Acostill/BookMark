const express = require('express');
const router = express.Router();
const themoviedb = require('../api/themoviedb');
const gbooks = require('../api/gbooks');

router.get('/tv/details/:id', themoviedb.tvDetails);
router.get('/tv/search/:query', themoviedb.tvSearch);
router.get('/ani/details/:id', themoviedb.aniDetails);
router.get('/ani/search/:query', themoviedb.aniSearch);
router.get('/movie/details/:id', themoviedb.movieDetails);
router.get('/movie/search/:query', themoviedb.movieSearch);
router.get('/book/details/:id', gbooks.bookDetails);
router.get('/book/search/:query', gbooks.bookSearch);

module.exports = router;
