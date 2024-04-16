const express = require('express');
const router = express.Router();
const Sample = require('../models/Sample');

// Get all samples
router.get('/samples', async (req, res) => {
  try {
    const samples = await Sample.findAll();
    res.json(samples);
  } catch (error) {
    console.error('Error fetching samples:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get a sample by ID
router.get('/samples/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const sample = await Sample.findByPk(id);
    if (!sample) {
      return res.status(404).json({ message: 'Sample not found' });
    }
    res.json(sample);
  } catch (error) {
    console.error('Error fetching sample by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new sample
router.post('/samples', async (req, res) => {
  try {
    const { attribute1, attribute2 } = req.body; // Replace with your actual attributes
    const newSample = await Sample.create({
      attribute1,
      attribute2
    });
    res.status(201).json(newSample);
  } catch (error) {
    console.error('Error creating sample:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update an existing sample
router.put('/samples/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const sample = await Sample.findByPk(id);
    if (!sample) {
      return res.status(404).json({ message: 'Sample not found' });
    }
    const { attribute1, attribute2 } = req.body; // Replace with your actual attributes
    await sample.update({
      attribute1,
      attribute2
    });
    res.json(sample);
  } catch (error) {
    console.error('Error updating sample:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a sample
router.delete('/samples/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const sample = await Sample.findByPk(id);
    if (!sample) {
      return res.status(404).json({ message: 'Sample not found' });
    }
    await sample.destroy();
    res.json({ message: 'Sample deleted successfully' });
  } catch (error) {
    console.error('Error deleting sample:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
