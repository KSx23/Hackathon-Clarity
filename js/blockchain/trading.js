// Trading class
class Trading {
    constructor(stockSymbol, quantity, price) {
      this.stockSymbol = stockSymbol;
      this.quantity = quantity;
      this.price = price;
    }
  
    calculateTotalValue() {
      const totalValue = this.quantity * this.price;
      return totalValue.toFixed(2);
    }
  
    calculateProfitOrLoss(sellingPrice) {
      const costPrice = this.quantity * this.price;
      const sellingValue = this.quantity * sellingPrice;
      const profitOrLoss = sellingValue - costPrice;
      return profitOrLoss.toFixed(2);
    }
  }
  
  // Example usage
  const trade = new Trading("AAPL", 100, 150);
  const totalValue = trade.calculateTotalValue();
  const profitOrLoss = trade.calculateProfitOrLoss(160);
  
  console.log(`Total Value: $${totalValue}`);
  console.log(`Profit/Loss: $${profitOrLoss}`);