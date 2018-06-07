const db = require("./index");
const authQueries = require('./auth_queries');

const getSessionUser = (req, res, next) => {
  db
  .one("select * from users where username=${username}", req.user)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const getUserByUsername = (req, res, next) => {
  db
  .one('select * from users where username=${username}', req.params)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const seriesList = (req, res, next) => {
  db
  .any('select * from series_list where user_id=${user_id}', req.body)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const movieList = (req, res, next) => {
  db
  .any('select * from movie_list where user_id=${user_id}', req.body)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const animeList = (req, res, next) => {
  db
  .any('select * from anime_list where user_id=${user_id}', req.body)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const bookList = (req, res, next) => {
  db
  .any('select * from book_list where user_id=${user_id}', req.body)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
}

const updateSeriesProgress = (req, res, next) => {
  db
  .none('UPDATE series_list SET savepoint=${progress} WHERE id=${id}', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}

const updateMovieProgress = (req, res, next) => {
  db
  .none('UPDATE movie_list SET savepoint=${progress} WHERE id=${id}', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}

const updateAnimeProgress = (req, res, next) => {
  db
  .none('UPDATE anime_list SET savepoint=${progress} WHERE id=${id}', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}

const updateBookProgress = (req, res, next) => {
  db
  .none('UPDATE book_list SET savepoint=${progress} WHERE id=${id}', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}

const addSeries = (req, res, next) => {
  db
  .none('INSERT INTO series_list (user_id, series_id, status, savepoint) VALUES (${user_id}, ${series_id}, ${status}, ${progress})', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}
const addMovie = (req, res, next) => {
  db
  .none('INSERT INTO movie_list (user_id, media_id, status, savepoint) VALUES (${user_id}, ${media_id}, ${status}, ${progress})', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}
const addAnime = (req, res, next) => {
  db
  .none('INSERT INTO anime_list (user_id, media_id, status, savepoint) VALUES (${user_id}, ${media_id}, ${status}, ${progress})', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}
const addBook = (req, res, next) => {
  db
  .none('INSERT INTO book_list (user_id, media_id, status, savepoint) VALUES (${user_id}, ${media_id}, ${status}, ${progress})', req.body)
  .then(() => res.status(200).json('Success'))
  .catch(err => next(err));
}
module.exports = {
  authQueries,
  getSessionUser,
  getUserByUsername,
  seriesList,
  movieList,
  animeList,
  bookList,
  updateSeriesProgress,
  updateMovieProgress,
  updateAnimeProgress,
  updateBookProgress,
  addSeries,
  addMovie,
  addAnime,
  addBook
}