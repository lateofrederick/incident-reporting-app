const router = require("express").Router();

// user related endpoints
router.use("/incidents", require("../controllers/incident.controller"));

module.exports = router;
