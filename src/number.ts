/**
 * Formats a number as currency according to the specified locale and currency code.
 *
 * @param amount The amount to be formatted.
 * @param locale The locale string. Defaults to 'en-US'.
 * @param currency The currency code. Defaults to 'AED'.
 * @returns The formatted currency string, or an empty string for invalid input.
 *
 * @example
 * ```
 * formatCurrency(1500000) // 'AED 1,500,000.00'
 * ```
 */

export const formatCurrency = (
  amount: number,
  locale = 'en-US',
  currency = 'AED'
) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '';
  else
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
};

/**
 * Rounds a number to two decimal places.
 *
 * @param num The number to be rounded.
 * @returns The number rounded to two decimal places as a string, or an empty string for invalid input.
 *
 * @example
 * ```
 * roundToTwoDecimals(123.456) // 123.46
 * ```
 */
export const roundToTwoDecimals = (num: number) => {
  if (typeof num !== 'number' || isNaN(num)) return '';
  else return num.toFixed(2);
};
