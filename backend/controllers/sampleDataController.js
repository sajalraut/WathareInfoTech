// backend/controllers/sampleDataController.js

const SampleData = require('../models/db');

async function getAllSampleData(req, res) {
  try {
    const data = await SampleData.getAllSampleData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllSampleData
};
