const express = require('express');
const router = express.Router();
const {getDailySummary} =require('../controllers/weather.contoller')
router.route('/dailysummary').get(getDailySummary)


module.exports = router;