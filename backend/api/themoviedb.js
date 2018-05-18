const { theMovieDb } = require('../config');
const axios = require('axios');

const hasGenre = (arr, id) => {
  for (el of arr) {
    if (el.id === id) return true;
  }

  return false;
}

const isAnime = obj => {
  let isAnimation = (obj.genre_ids 
    ? obj.genre_ids.includes(16) 
    : hasGenre(obj.genres, 16)
  );

  return isAnimation && obj.original_language === 'ja';
}

const tvDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => {
    let code = isAnime(response.data) ? 204 : 200;

    res.status(code).send(response.data);    
  })
  .catch(e => res.status(500).send(e.message));
}

const aniDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => {
    let code = isAnime(response.data) ? 200 : 204;

    res.status(code).send(response.data);    
  })
  .catch(e => res.status(500).send(e.message));
}

const movieDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => res.status(200).send(response.data))
  .catch(e => res.status(500).send(e.message));
}

const tvSearch = (req, res, next) => {
  let query = req.params.query;
  
  axios
    .get(`https://api.themoviedb.org/3/search/tv?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1`)
    .then(response => {
      //filter out anime series
      response.data.results = response.data.results.filter(result => !isAnime(result));
      
      res.status(200).send(response.data);
    })
  .catch(e => res.status(500).send(e.message));
}

const aniSearch = (req, res, next) => {
  let query = req.params.query;
  axios
    .get(`https://api.themoviedb.org/3/search/tv?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1`)
    .then(response => {
    //filter out non-anime series
      response.data.results = response.data.results.filter(result => isAnime(result));

      res.status(200).send(response.data);
  });
}

const movieSearch = (req, res, next) => {
  let query = req.params.query;
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => {
    //filter out anime movies      
      response.data.results = response.data.results.filter(result => !isAnime(result));
      
      res.status(200).send(response.data);
  });
}

module.exports = {
  tvDetails,
  aniDetails,
  movieDetails,
  tvSearch,
  aniSearch,
  movieSearch
}