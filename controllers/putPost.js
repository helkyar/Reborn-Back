const data = require("../resources/mockdata");
const fs = require("fs");

function putPost(req, res) {
  //! Data should be validadted

  res.status(200).json(data);
}

module.exports = putPost;

/**
 * (*) Overwrite JSON with fs creating a new entry
 * should append instead
 * @param {json} products
 */
const updateProducts = (products) => {
  fs.writeFile("products.json", JSON.stringify(products), "utf-8", (error) => {
    if (error) {
      return { message: error.message };
    }
  });
};
