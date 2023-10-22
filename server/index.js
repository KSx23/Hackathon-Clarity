// Import necessary dependencies and modules
const express = require('express');
const governmentRouter = require('./server/routes/government');

// Create an instance of the Express app
const app = express();

// Use the government router for the '/government' route
app.use('/government', governmentRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});