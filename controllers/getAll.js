const data = require("../resources/mockdata");

/**
 * As of now returns all data without any filter
 * should rerturn a substrat with some relevance
 * either in general or specificly for the user
 * using cookies.
 * @param {request} req
 * @param {response} res
 */
function getLast(req, res) {
  res.status(200).json(data);
}

module.exports = getLast;
