const { getIncidents } = require('../services/incidents.service');

const router = require('express').Router();


// retrieve all incidents
router.get('/', async (req, res, next) => {
    try {
        return res.status(200).json(await getIncidents());
    } catch (error) {
        next(error);
    }
});


module.exports = router;
