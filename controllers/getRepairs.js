const { response } = require("express");
const data = require("../resources/mockdata");

/**
 * As of now only returns posts that match
 * exactly the string passed as parameter
 * @param {request} req
 * @param {response} res
 */
function getRepairs(req, res) {
  let post = [];
  let toRepair = req.params.repair;
  console.log(toRepair);
  if (toRepair == "repair") {
    post = data.posts.filter((post) => post.toRepair);
  } else if (toRepair == "transform") {
    post = data.posts.filter((post) => !post.toRepair);
  }
  res.status(200).json(post);
}

module.exports = getRepairs;
