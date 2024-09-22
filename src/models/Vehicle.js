const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['hatchback', 'suv', 'sedan', 'cruiser', 'sports'],
    required: true,
  },
  category: {
    type: String,
    enum: ['car', 'bike'],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);