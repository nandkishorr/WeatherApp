const cron = require('node-cron');
const { DailySummary } = require('../controllers/weather.controller');

// List of Metro cities to generate daily summaries  
const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad','Kochi'];

// Cron job to generate daily summary at 4hrs interval
cron.schedule('*/5 * * * *', () => {
  cities.forEach(city => DailySummary(city));
  console.log('Daily weather summary calculation scheduled.');
});