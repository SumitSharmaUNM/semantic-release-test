/**
 * Capitalizes the first letter of a string.
 *
 * @param str The input string. Defaults to ''.
 * @returns The string with the first letter capitalized, or an empty string.
 *
 * @example
 * ```
 * capitalizeFirst('hello') // 'Hello'
 * ```
 */
export const capitalizeFirst = (str = '') => {
  if (typeof str !== 'string' || !str) return '';
  else return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Truncates long string to specified length.
 *
 * @param str The input string. Defaults to ''.
 * @param length The length of the resulting truncated string. Defaults to 100.
 * @returns The truncated string with '...' appended if it exceeds the specified length, otherwise returns the original string.
 *
 * @example
 * ```
 * truncate('This is a long string that needs to be truncated', 10) // 'This is a ...'
 * ```
 */
export const truncate = (str = '', length = 100) => {
  if (typeof str !== 'string' || !str) return '';
  else return str.length > length ? `${str.slice(0, length)}...` : str;
};
/**
 * Cleans a string by removing extra spaces and trimming.
 *
 * @param str The input string. Defaults to ''.
 * @returns The cleaned string with extra spaces removed and trimmed.
 *
 * @example
 * ```
 * cleanString('  Hello   World  ') // 'Hello World'
 * ```
 */
export const cleanString = (str = '') => {
  if (typeof str !== 'string' || !str) return '';
  else return str.trim().replace(/\s+/g, ' ');
};
