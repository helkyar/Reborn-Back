const router = require("express").Router();

router.get("/", require("../controllers/getAll"));

module.exports = router;
