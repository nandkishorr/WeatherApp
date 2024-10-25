const mongoose = require('mongoose');
const weatherSchema = new mongoose.Schema({
        city: { type: String, required: true },
        temp: { type: Number, required: true },
        feels_like: { type: Number, required: true },
        temp_min: { type: Number, required: true },
        temp_max: { type: Number, required: true },
        pressure: { type: Number, required: true },
        humidity: { type: Number, required: true },
        condition: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }, 
      });
      
const Weather = mongoose.model('weather', weatherSchema);
module.exports = Weather;