// Mortgage class
class Mortgage {
    constructor(principal, interestRate, years) {
      this.principal = principal;
      this.interestRate = interestRate;
      this.years = years;
    }
  
    calculateMonthlyPayment() {
      const monthlyInterestRate = (this.interestRate / 100) / 12;
      const numberOfPayments = this.years * 12;
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const monthlyPayment = this.principal * (numerator / denominator);
      return monthlyPayment.toFixed(2);
    }
  
    calculateTotalPayment() {
      const monthlyPayment = this.calculateMonthlyPayment();
      const numberOfPayments = this.years * 12;
      const totalPayment = monthlyPayment * numberOfPayments;
      return totalPayment.toFixed(2);
    }
  }
  
  // Example usage
  const mortgage = new Mortgage(200000, 4.5, 30);
  const monthlyPayment = mortgage.calculateMonthlyPayment();
  const totalPayment = mortgage.calculateTotalPayment();
  
  console.log(`Monthly Payment: $${monthlyPayment}`);
  console.log(`Total Payment: $${totalPayment}`);