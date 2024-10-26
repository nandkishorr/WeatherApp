const express = require('express');
const router = express.Router();
const {getDailySummary, fetchWeather,getClimateCount} =require('../controllers/weather.controller');
router.route('/summary').get(getDailySummary)
router.route('/weather').get(fetchWeather)
router.route('/summary/climate').post(getClimateCount)

module.exports = router;