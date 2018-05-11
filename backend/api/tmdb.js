const config = require('../config');
const tmdbKey = config.keys.tmdb;
const axios = require('axios');

const tvDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&append_to_response=keywords&language=en-US`)
  .then(axiosRes => {
    res.status(200).json({
      message: 'success',
      tv: axiosRes.data
    })
  })
  .catch(err => {
    res.status(500).send(`${err}`);
  })
}

const movieDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&append_to_response=keywords&language=en-US`)
  .then(axiosRes => {
    res.status(200).json({
      message: 'success',
      movie: axiosRes.data
    })
  })
  .catch(err => {
    res.status(500).send(`${err}`);
  })
}

module.exports = {
  tvDetails,
  movieDetails
}