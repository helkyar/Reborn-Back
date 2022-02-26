const data = require("../resources/mockdata");

function putPost(req, res) {
  //* db connection INSERT data and return formed post as data
  //! Data should be validadted
  res.status(200).json(data);
}

module.exports = putPost;
