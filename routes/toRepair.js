const router = require("express").Router();

router.get("/:repair", require("../controllers/getRepairs"));

module.exports = router;
