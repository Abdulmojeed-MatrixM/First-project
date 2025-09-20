// generatereport.js
import jsPDF from "jspdf";

/**
 * generatepdf(data)
 * data: {
 *  initialInvestment,
 *  annualInvestment,
 *  expectedReturn,
 *  duration,
 *  results: [ { year, interest, investmentValue, totalInterest, investedCapital }, ... ]
 * }
 */
export function generatepdf(data) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Investment Report", 14, 18);

  doc.setFontSize(11);
  const left = 14;
  let y = 30;
  doc.text(`Beginning Investment: £${Number(data.initialInvestment).toFixed(2)}`, left, y);
  y += 6;
  doc.text(`Annual Investment: £${Number(data.annualInvestment).toFixed(2)}`, left, y);
  y += 6;
  doc.text(`Return on Investment: ${Number(data.expectedReturn).toFixed(2)}%`, left, y);
  y += 6;
  doc.text(`Years of Investment: ${data.duration}`, left, y);
  y += 10;

  const pageHeight = doc.internal.pageSize.getHeight();
  const lineHeight = 6;

  data.results.forEach((r) => {
    if (y + 40 > pageHeight) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(12);
    doc.text(`Year: ${r.year}`, left, y);
    doc.setFontSize(10);
    doc.text(`Interest (Year): £${r.interest.toFixed(2)}`, left, y + lineHeight);
    doc.text(`Total Interest: £${r.totalInterest.toFixed(2)}`, left, y + lineHeight * 2);
    doc.text(`Invested Capital: £${r.investedCapital.toFixed(2)}`, left, y + lineHeight * 3);
    doc.text(`Total Investment Value: £${r.investmentValue.toFixed(2)}`, left, y + lineHeight * 4);
    y += 40;
  });

  doc.save("Investment-Report.pdf");
}
