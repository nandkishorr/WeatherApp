const axios = require('axios');
const Weather = require('../models/weather.model');
const DailySummary = require('../models/dailysummary.model');

const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
      
      const temp_celsius = response.data.main.temp - 273.15;
      const feels_like_celsius = response.data.main.feels_like - 273.15;
      const condition = response.data.weather[0].main;
  
      const weatherData = new Weather({
        city,
        temperature: temp_celsius,
        feels_like: feels_like_celsius,
        condition,
      });
  
      await weatherData.save();
      console.log(`Weather data for ${city} saved.`);
    } catch (error) {
      console.error(`Error fetching weather for ${city}: ${error.message}`);
    }
  };

  const calculateDailySummary = async (city) => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
  
    const weatherData = await Weather.find({ city, timestamp: { $gte: startOfDay } });
  
    if (weatherData.length === 0) return;
  
    const minTemp = Math.min(...weatherData.map(data => data.temperature));
    const maxTemp = Math.max(...weatherData.map(data => data.temperature));
    const avgTemp = weatherData.reduce((sum, data) => sum + data.temperature, 0) / weatherData.length;
  
    const conditions = weatherData.map(data => data.condition);
    const dominantCondition = conditions.sort((a, b) => 
      conditions.filter(v => v === a).length - conditions.filter(v => v === b).length
    ).pop();
  
    const dailySummary = new DailySummary({
      city,
      min_temperature: minTemp,
      max_temperature: maxTemp,
      avg_temperature: avgTemp,
      dominant_condition: dominantCondition,
      date: startOfDay
    });
  
    await dailySummary.save();
  };
  const getDailySummaryData = async (city) => {
    try {
      const summary = await DailySummary.find({ city }).sort({ date: -1 });
      if (summary.length === 0) {
        return null;
      }
      return summary[0];
    } catch (error) {
      throw new Error('Error retrieving daily summary data');
    }
  };


  module.exports = {
    fetchWeatherData,
    calculateDailySummary,
    getDailySummaryData
  }