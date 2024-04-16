// backend/index.js

const express = require('express');
const cors = require('cors');
const sampleDataRoutes = require('./routes/sampleDataRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', sampleDataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
