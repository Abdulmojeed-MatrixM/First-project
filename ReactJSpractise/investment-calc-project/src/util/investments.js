// investments.js
/**
 * Calculate yearly investment results.
 * Input object: { initialInvestment, annualInvestment, expectedReturn, duration }
 * Returns array of objects, one per year:
 * { year, interest, investmentValue, totalInterest, investedCapital }
 */
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = Number(initialInvestment);
  let totalInterest = 0;
  let investedCapital = Number(initialInvestment);

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (Number(expectedReturn) / 100);
    totalInterest += interestEarnedInYear;
    investedCapital += Number(annualInvestment);
    investmentValue += interestEarnedInYear + Number(annualInvestment);

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      investmentValue: investmentValue,
      totalInterest: totalInterest,
      investedCapital: investedCapital,
    });
  }

  return annualData;
}
