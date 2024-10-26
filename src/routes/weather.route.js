const express = require('express');
const router = express.Router();
const {getDailySummary, fetchWeather,getClimateCount,forecastWeatherData, fetchHourlyData} =require('../controllers/weather.controller');
router.route('/summary').get(getDailySummary)
router.route('/weather').get(fetchWeather)
router.route('/summary/climate').post(getClimateCount)
router.route('/forecast').post(forecastWeatherData)
router.route('/hourly').post(fetchHourlyData)

module.exports = router;