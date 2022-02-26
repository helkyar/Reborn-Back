const { response } = require("express");
const data = require("../resources/mockdata");

/**
 * As of now only returns posts that match
 * exactly the string passed as parameter
 * @param {request} req
 * @param {response} res
 */
function getSearch(req, res) {
  let search = req.params.search;
  let post = data.posts.filter((post) => post.tags.includes(search));
  res.status(200).json(post);
}

module.exports = getSearch;
