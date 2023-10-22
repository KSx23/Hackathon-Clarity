// Import necessary dependencies and modules
const government = require('./government/government');

// Function to get the credit score for a given address
async function getCreditScore(address) {
  try {
    const score = await government.getCreditScore(address);
    return score;
  } catch (error) {
    console.error('Error getting credit score:', error);
    throw error;
  }
}

// Function to update the credit score for a given address
async function updateCreditScore(address, newScore) {
  try {
    const result = await government.updateCreditScore(address, newScore);
    return result;
  } catch (error) {
    console.error('Error updating credit score:', error);
    throw error;
  }
}

// Export the functions for external use
module.exports = {
  getCreditScore,
  updateCreditScore,
};