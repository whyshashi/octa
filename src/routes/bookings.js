const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');


router.post('/', async (req, res) => {
  try {
    const { vehicleId, startDate, endDate, userInfo } = req.body;


    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    const overlappingBooking = await Booking.findOne({
      vehicle: vehicleId,
      $or: [
        { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
        { startDate: { $gte: startDate, $lte: endDate } },
        { endDate: { $gte: startDate, $lte: endDate } },
      ],
    });

    if (overlappingBooking) {
      return res.status(400).json({ message: 'Vehicle is not available for the selected dates' });
    }

 
    const newBooking = new Booking({
      vehicle: vehicleId,
      startDate,
      endDate,
      userInfo,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;