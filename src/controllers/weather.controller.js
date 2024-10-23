const { fetchWeatherData,calculateDailySummary,getDailySummaryData} = require('../services/weather.services');

const fetchWeather = async (req, res) => {
    try {
      const city = req.params.city;
      await fetchWeatherData(city);
      res.status(200).json({ message: `Weather data for ${city} fetched and saved.` });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching weather data' });
    }
  };

  const DailySummary = async (req, res) => {
    try {
      const city = req.params.city;
      await calculateDailySummary(city);
      res.status(200).json({ message: `Daily summary data for ${city} is calculated and saved.` });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching weather data' });
    }
  };

  const getDailySummary = async (req, res) => {
    try {
      const city = req.body.city;
      console.log("City requested:", city);
      const summary = await getDailySummaryData(city);
      if (!summary) {
        return res.status(404).json({ error: 'No daily summary data found' });
      }
      res.status(200).json(summary);
    } catch (error) {
      console.error('Error fetching daily summary:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {
    fetchWeather,
    DailySummary,
    getDailySummary
}
