const fs = require('fs');
const Sample = require('./models/Sample');

// Read the JSON file
fs.readFile('./sample-data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse JSON data
    const samples = JSON.parse(data);

    // Insert each sample into the database
    Sample.bulkCreate(samples)
      .then(() => {
        console.log('Data inserted successfully');
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
