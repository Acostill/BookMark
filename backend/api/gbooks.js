const axios = require('axios');

//Ender's Game WEW1cC7yaCQC
const bookDetails = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(err => {
    res.status(500).send(`${err}`);
  })
}

const bookSearch = (req, res, next) => {
  let query = req.params.query;
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => {
      res.status(200).send(response.data);
    })
}

module.exports = {
  bookDetails,
  bookSearch
}