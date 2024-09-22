const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');


router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:type', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ type: req.params.type });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;