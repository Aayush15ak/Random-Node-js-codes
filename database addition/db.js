const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const db = mongoose.connection;
db.on('error', ( err )=> console.error('Connection error:', err));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));

module.exports = db;
