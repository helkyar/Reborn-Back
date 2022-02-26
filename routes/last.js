const router = require("express").Router();

router.get("/", require("../controllers/getLast"));

module.exports = router;
