const {
  getIncidents,
  reportIncident,
} = require("../services/reports.service");

const router = require("express").Router();

// retrieve all incidents
router.get("/", async (req, res, next) => {
  try {
    return res.status(200).json(await getIncidents());
  } catch (error) {
    next(error);
  }
});

// report a new incident
router.post("/", async (req, res, next) => {
  const { client_id, name, incident_desc, city, country } = req.body;

  try {
    return res
      .status(201)
      .json(
        await reportIncident({ client_id, name, incident_desc, city, country })
      );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
