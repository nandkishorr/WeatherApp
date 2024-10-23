const mongoose = require('mongoose');
const weatherSchema = new mongoose.Schema({
        city: { type: String, required: true },
        temperature: { type: Number, required: true },
        feels_like: { type: Number, required: true },
        condition: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }, 
      });
      
const Weather = mongoose.model('weather', weatherSchema);
module.exports = Weather;