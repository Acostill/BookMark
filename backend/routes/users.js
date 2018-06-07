const express = require('express');
const router = express.Router();
const BMDb = require("../db/queries");
const { loginRequired } = require("../auth/helpers");

/* Post Requests */
router.get('/logout', loginRequired, BMDb.authQueries.logoutUser);
router.get('/session_user', loginRequired, BMDb.getSessionUser);
router.get('/username/:username', BMDb.getUserByUsername);

/* Post Requests */
router.post('/register', BMDb.authQueries.registerUser);
router.post('/login', BMDb.authQueries.loginUser);

router.post('/anime/list', BMDb.animeList);
router.post('/anime/add', BMDb.addAnime);
router.post('/anime/progress', BMDb.updateAnimeProgress);

router.post('/series/list', BMDb.seriesList);
router.post('/series/add', BMDb.addSeries);
router.post('/series/progress', BMDb.updateSeriesProgress);

router.post('/movie/list', BMDb.movieList);
router.post('/movie/add', BMDb.addMovie);

router.post('/book/list', BMDb.bookList);
router.post('/book/add', BMDb.addBook);
router.post('/book/progress', BMDb.updateBookProgress);

module.exports = router;