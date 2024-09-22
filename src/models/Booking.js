const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  userInfo: {
    name: String,
    email: String,
    phone: String,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);