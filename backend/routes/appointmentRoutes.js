const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Create a new patient record
router.post('/patients', async (req, res) => {
    const { name, phone, lastVisit, reason } = req.body;
    try {
        const patient = new Patient({ name, phone, lastVisit, reason });
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all patient records
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
