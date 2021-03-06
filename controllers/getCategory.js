const data = require("../resources/mockdata");

/**
 * Returns the posts that match the category
 * passed as parameter
 * @param {request} req
 * @param {response} res
 */
function getCategory(req, res) {
  let category = req.params.category;
  let post = data.posts.filter((post) => post.categories.includes(category));
  res.status(200).json(post);
}

module.exports = getCategory;
