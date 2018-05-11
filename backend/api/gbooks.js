const axios = require('axios');

//Ender's Game WEW1cC7yaCQC
const getBookById = (req, res, next) => {
  let id = req.params.id;
  axios
  .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
  .then(axiosRes => {
    res.status(200).json({
      message: 'success',
      book: axiosRes.data
    })
  })
  .catch(err => {
    res.status(500).send(`${err}`);
  })
}

module.exports = {
  getBookById
}