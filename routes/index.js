const router = require("express").Router();
require("dotenv").config();

/**
 * Returns last results based on date
 */
router.use("/", require("./last"));
/**
 * Returns all elements of a cerntain category
 */
router.use("/search", require("./search"));
/**
 * Returns all elements of a cerntain key-word
 */
router.use("/category", require("./category"));
/**
 * Route to get or put new posts based on id
 */
router.use("/post", require("./post"));

module.exports = router;
