
export function calculateInvestmentResults({
  initialInvestment,
  yearlyInvestment,
  expectedReturn,
  duration,
}, results) {
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + yearlyInvestment;
    results.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue, 
      yealryInvestment: yearlyInvestment,
    });
  }
}
export const formatter = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
