const router = require("express").Router();

router.get("/:search", require("../controllers/getSearch"));

module.exports = router;
