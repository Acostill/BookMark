const { theMovieDb } = require('../config');
const axios = require('axios');

const hasGenre = (arr, id) => {
  for (el of arr) {
    if (el.id === id) return true;
  }

  return false;
}

const isAnime = series => series.genre_ids.includes(16) && series.original_language === 'ja';

const seriesDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => {
    let series = {
      ...response.data,
      title: response.data.name,
      description: response.data.overview,
      genre_ids: response.data.genres.map(genre => genre.id)
    }

    let code = isAnime(series) ? 204 : 200;
    res.status(code).json(series);
  })
  .catch(e => res.status(500).json(e.message));
}

const animeDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => {
    let anime = {
      ...response.data,
      title: response.data.name,
      description: response.data.overview,
      genre_ids: response.data.genres.map(genre => genre.id)
    }
    let code = isAnime(anime) ? 200 : 204;

    res.status(code).json(anime);    
  })
  .catch(e => res.status(500).json(e.message));
}

const movieDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${theMovieDb.key}&append_to_response=keywords&language=en-US`)
  .then(response => res.status(200).json(response.data))
  .catch(e => res.status(500).json(e.message));
}

const seriesSearch = (req, res, next) => {
  let query = req.params.query;
  
  axios
    .get(`https://api.themoviedb.org/3/search/tv?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1`)
    .then(response => {
      //filter out anime series
      let seriesList = response.data.results.filter(result => !isAnime(result));
      seriesList = seriesList.map(series => {
        return {
          ...series,
          title: series.name,
          description: series.overview
        }
      })
      res.status(200).json({
        ...response.data,
        results: seriesList
      });
    })
  .catch(e => res.status(500).json(e.message));
}

const animeSearch = (req, res, next) => {
  let query = req.params.query;
  axios
    .get(`https://api.themoviedb.org/3/search/tv?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1`)
    .then(response => {
    //filter out non-anime series
      response.data.results = response.data.results.filter(result => isAnime(result));

      res.status(200).json(response.data);
  });
}

const movieSearch = (req, res, next) => {
  let query = req.params.query;
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${theMovieDb.key}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => {
    //filter out anime movies      
      response.data.results = response.data.results.filter(result => !isAnime(result));
      
      res.status(200).json(response.data);
  });
}

module.exports = {
  seriesDetails,
  animeDetails,
  movieDetails,
  seriesSearch,
  animeSearch,
  movieSearch
}