// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const Trading = require('./trading');
const Government = require('./government');
const Maps = require('./maps');

// Create an instance of the Express app
const app = express();

// Configure middleware
app.use(bodyParser.json());

// Create trading instance
const trade = new Trading("AAPL", 100, 150);

// Create government instance
const government = new Government("Government of XYZ");

// Create maps instance
const maps = new Maps();

// Define routes
app.get('/trade/total-value', (req, res) => {
  const totalValue = trade.calculateTotalValue();
  res.json({ totalValue });
});

app.get('/trade/profit-loss', (req, res) => {
  const sellingPrice = req.query.sellingPrice;
  const profitOrLoss = trade.calculateProfitOrLoss(sellingPrice);
  res.json({ profitOrLoss });
});

app.post('/government/approve-nft', (req, res) => {
  const nft = req.body.nft;
  government.approveListing(nft);
  res.json({ message: `Listing of NFT ${nft} approved by the government` });
});

app.get('/maps/location/:name', (req, res) => {
  const name = req.params.name;
  const location = maps.getLocation(name);
  res.json({ location });
});

app.get('/maps/locations', (req, res) => {
  const allLocations = maps.getAllLocations();
  res.json({ allLocations });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});