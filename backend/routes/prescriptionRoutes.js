const express = require('express');
const router = express.Router();
const Prescription = require('../models/Prescription');

// Create a new prescription
router.post('/prescriptions', async (req, res) => {
    const { patientName, medication, dosage, instructions } = req.body;
    try {
        const prescription = new Prescription({ patientName, medication, dosage, instructions });
        await prescription.save();
        res.status(201).json(prescription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all prescriptions
router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await Prescription.find();
        res.json(prescriptions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
