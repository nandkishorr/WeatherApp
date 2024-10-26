const cron = require('node-cron');
const { fetchWeather } = require('../controllers/weather.controller');

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad','Kochi'];

// Cron job to fetch weather data every hour
cron.schedule('*/2 * * * *', () => {
    cities.forEach(city => fetchWeather(city));
    console.log('Weather data fetch scheduled.');
});
