const mongoose = require('mongoose');

const DailySummarySchema = new mongoose.Schema({
  city: { type: String, required: true },
  date: { type: Date, required: true },
  min_temp: { type: Number, required: true },
  max_temp: { type: Number, required: true },
  avg_temp: { type: Number, required: true },
  avg_humidity: { type: Number, required: true },
  avg_pressure: { type: Number, required: true },
  dominant_condition: { type: String, required: true },
});

DailySummary = mongoose.model('dailysummary', DailySummarySchema);
module.exports = DailySummary;
