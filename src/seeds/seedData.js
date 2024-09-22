const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle');
const connectDB = require('../config/database');

const seedData = [
  { type: 'hatchback', category: 'car', model: 'Honda Fit' },
  { type: 'hatchback', category: 'car', model: 'Toyota Yaris' },
  { type: 'suv', category: 'car', model: 'Honda CR-V' },
  { type: 'suv', category: 'car', model: 'Toyota RAV4' },
  { type: 'sedan', category: 'car', model: 'Honda Civic' },
  { type: 'sedan', category: 'car', model: 'Toyota Corolla' },
  { type: 'cruiser', category: 'bike', model: 'Harley-Davidson Street 750' },
  { type: 'sports', category: 'bike', model: 'Kawasaki Ninja 650' },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await Vehicle.deleteMany({});
    await Vehicle.insertMany(seedData);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();