const express = require('express');
const router = express.Router();
const themoviedb = require('../api/themoviedb');
const gbooks = require('../api/gbooks');

router.get('/series/details/:id', themoviedb.seriesDetails);
router.get('/series/search/:query', themoviedb.seriesSearch);
router.get('/anime/details/:id', themoviedb.animeDetails);
router.get('/anime/search/:query', themoviedb.animeSearch);
router.get('/movie/details/:id', themoviedb.movieDetails);
router.get('/movie/search/:query', themoviedb.movieSearch);
router.get('/book/details/:id', gbooks.bookDetails);
router.get('/book/search/:query', gbooks.bookSearch);

module.exports = router;
