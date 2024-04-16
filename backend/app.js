const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/db');
const Sample = require('./models/Sample');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MySQL
sequelize.sync()
  .then(() => {
    console.log('Database and tables created');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Routes
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
