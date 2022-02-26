const data = require("../resources/mockdata");

function getPost(req, res) {
  //db connection get data
  res.status(200).json(data);
}

module.exports = getPost;
