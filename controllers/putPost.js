const data = require("../resources/mockdata");
const fs = require("fs");

function putPost(req, res) {
  //(!) DATA SHOULD BE VALIDATED
  let id = parseInt(req.body.id);
  let email = req.body.email;
  let title = req.body.title;
  let description = req.body.description;
  let toRepair = req.body.toRepair;
  let videos = req.body.videos;
  let imgs = req.body.imgs;
  let categories = req.body.categories;
  let materials = req.body.materials;
  let tags = req.body.tags;
  const post = {
    id,
    email,
    title,
    description,
    toRepair,
    videos,
    imgs,
    categories,
    materials,
    tags,
  };
  data.posts[data.posts.length] = post;
  updateProducts(data);
  res.status(200).json(data);
}

module.exports = putPost;

/**
 * (*) Overwrite JSON with fs creating a new entry
 * should append instead
 * @param {json} products
 */
const updateProducts = (post) => {
  fs.writeFile(
    "../resources/mockdata.json",
    JSON.stringify(post),
    "utf-8",
    (error) => {
      if (error) {
        return { message: error.message };
      }
    }
  );
};
