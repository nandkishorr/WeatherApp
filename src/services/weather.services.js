const axios = require('axios');
const Weather = require('../models/weather.model');

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

  module.exports = {
    fetchWeatherData,
  }