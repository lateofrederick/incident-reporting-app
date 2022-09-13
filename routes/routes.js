const router = require("express").Router();

// user related endpoints
router.use("/incidents", require("../controllers/report.controller"));

module.exports = router;
