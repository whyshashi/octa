require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const vehiclesRoutes = require('./routes/vehicles');
const bookingsRoutes = require('./routes/bookings');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/bookings', bookingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));