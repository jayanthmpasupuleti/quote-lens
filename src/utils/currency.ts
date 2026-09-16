/**
 * Format numerical amount to Indian Rupee (INR ₹) format
 * Uses the Indian numbering system: lakhs and crores (e.g. ₹24,850 or ₹1,50,000)
 */
export function formatINR(amount: number, includeSymbol = true): string {
  if (isNaN(amount)) {
    return includeSymbol ? '₹0' : '0';
  }

  // Format with en-IN locale
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);

  return includeSymbol ? `₹${formatted}` : formatted;
}
