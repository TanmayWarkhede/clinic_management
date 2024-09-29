const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    medication: { type: String, required: true },
    dosage: { type: String, required: true },
    instructions: { type: String, required: true },
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
