const express = require('express');
const router = express.Router();
const {getDailySummary} =require('../controllers/weather.controller');
router.route('/summary').get(getDailySummary)


module.exports = router;