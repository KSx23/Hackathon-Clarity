// Loan class
class Loan {
    constructor(amount, interestRate, duration) {
      this.amount = amount;
      this.interestRate = interestRate;
      this.duration = duration;
    }
  
    calculateMonthlyPayment() {
      const monthlyInterestRate = this.interestRate / 100 / 12;
      const numberOfPayments = this.duration * 12;
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      const monthlyPayment = this.amount * (numerator / denominator);
      return monthlyPayment.toFixed(2);
    }
  
    calculateTotalPayment() {
      const monthlyPayment = this.calculateMonthlyPayment();
      const numberOfPayments = this.duration * 12;
      const totalPayment = monthlyPayment * numberOfPayments;
      return totalPayment.toFixed(2);
    }
  }
  
  // Example usage
  const loan = new Loan(10000, 5, 3);
  const monthlyPayment = loan.calculateMonthlyPayment();
  const totalPayment = loan.calculateTotalPayment();
  
  console.log(`Monthly Payment: $${monthlyPayment}`);
  console.log(`Total Payment: $${totalPayment}`);