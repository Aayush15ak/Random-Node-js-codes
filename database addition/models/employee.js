const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    gender: { type: String, enum: ['male', 'female'] },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;