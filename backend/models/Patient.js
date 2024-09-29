const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    lastVisit: { type: Date, default: Date.now },
    reason: { type: String },
});

module.exports = mongoose.model('Patient', patientSchema);
