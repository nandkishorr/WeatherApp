const { fetchWeatherData } = require('../services/weather.services');

const fetchWeather = async (req, res) => {
    try {
      const city = req.params.city;
      await fetchWeatherData(city);
      res.status(200).json({ message: `Weather data for ${city} fetched and saved.` });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching weather data' });
    }
  };

module.exports = {
    fetchWeather,
}