const mongoose = require('mongoose');

const kittenSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: {type: String, required: false},
    breed: String,
    activities: [String],

})

const kitten = mongoose.model('kitten', kittenSchema);

module.exports = kitten;
