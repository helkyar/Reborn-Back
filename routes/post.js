const router = require("express").Router();

// router.{get/post}('', require(''));
router.get("/:id", require("../controllers/getPost"));
router.post("", require("../controllers/putPost"));

module.exports = router;
