const { fetchWeatherData,calculateDailySummary,getDailySummaryData} = require('../services/weather.services');

const fetchWeather = async (city) => {
    try {
      await fetchWeatherData(city);
      console.log(`Weather data for ${city} fetched and saved.`);
    } catch (error) {
      console.error(`Error fetching weather data for ${city}:`, error);
    }
  };

  const DailySummary = async (city) => {
    try {
      await calculateDailySummary(city);
      console.log(`Daily summary data for ${city} is calculated and saved.`);
    } catch (error) {
       console.error('Error fetching weather data', error);
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
