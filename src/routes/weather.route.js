const express = require('express');
const router = express.Router();
const {getDailySummary, fetchWeather} =require('../controllers/weather.controller');
router.route('/summary').get(getDailySummary)
router.route('/weather').get(fetchWeather)

module.exports = router;