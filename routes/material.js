const router = require("express").Router();

router.get("/:material", require("../controllers/getMaterial.js"));

module.exports = router;
