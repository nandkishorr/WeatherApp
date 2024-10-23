const express = require('express');
const router = express.Router();
const {getCurrentWeatherData,getHourlyForecastData,getDailyForecastData,getDailyWeatherData,getDailySummaryData} =require('../controllers/weather.contoller')
router.route('/').get(getCurrentWeatherData)


module.exports = router;