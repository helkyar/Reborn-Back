const router = require("express").Router();
require("dotenv").config();

/**
 * Returns all results
 * (!)THIS SHOULDN'T BE ALLOWED IN PRODUCTION
 */
router.use("/", require("./all"));
/**
 * Returns elements based on post related to repairs
 * or transformation of products
 */
router.use("/type", require("./toRepair"));
/**
 * Returns all elements of a cerntain key-word
 * empty array if no value found
 */
router.use("/search", require("./search"));
/**
 * Returns all elements of a cerntain category
 * empty array if no value found
 */
router.use("/category", require("./category"));
/**
 * Returns all elements of a cerntain material
 * empty array if no value found
 */
router.use("/material", require("./material"));
/**
 * Route to get or put new posts based on id
 * empty array if no value found
 */
router.use("/post", require("./post"));

module.exports = router;
