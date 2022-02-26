const router = require("express").Router();

router.get("/:id", require("../controllers/getPost"));
router.post("/", require("../controllers/putPost"));
// router.get("/", require("../controllers/putPost"));

module.exports = router;
