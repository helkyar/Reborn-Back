const data = require("../resources/mockdata");

/**
 * Returns the posts that match the category
 * passed as parameter
 * @param {request} req
 * @param {response} res
 */
function getMaterial(req, res) {
  let material = req.params.material;
  let post = data.posts.filter((post) => post.materials.includes(material));
  res.status(200).json(post);
}

module.exports = getMaterial;
