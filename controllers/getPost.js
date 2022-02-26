const data = require("../resources/mockdata");

/**
 * Returns post with matched id
 * @param {request} req
 * @param {response} res
 */
function getPost(req, res) {
  let id = req.params.id;
  let post = data.posts.filter((post) => post.id == id);
  res.status(200).json(post);
}

module.exports = getPost;
