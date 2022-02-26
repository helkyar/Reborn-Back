const router = require("express").Router();

router.get("/:category", require("../controllers/getCategory.js"));

module.exports = router;
