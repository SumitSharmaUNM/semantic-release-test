/*
 * Formats a date string into 'DD-MM-YYYY' format.
 *
 * @param date The input date string.
 * @returns The formatted date string, or an empty string for invalid input.
 *
 * @example
 * ```
 * formatDate('2025-10-17') // '17-10-2025'
 * ```
 */

export const formatDate = (date: string) => {
  const d = new Date(date);
  if (isNaN(d.getTime()) || typeof date !== 'string' || !date) {
    return '';
  }
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

/*
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * @param date The input date string.
 * @returns A string like 'Just now', '5 minutes ago', '2 hours ago', etc.
 *
 * @example
 * ```
 * timeAgo('2023-10-15T12:00:00Z') // '2 days ago'
 * ```
 */
export const timeAgo = (date: string) => {
  const d = new Date(date);
  if (isNaN(d.getTime()) || typeof date !== 'string' || !date) {
    return '';
  }
  const seconds = Math.floor((new Date().getTime() - d.getTime()) / 1000);
  if (seconds < 0) return 'In the future';
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return pluralize(Math.floor(seconds / 60), 'minute');
  if (seconds < 86400) return pluralize(Math.floor(seconds / 3600), 'hour');
  if (seconds < 604800) return pluralize(Math.floor(seconds / 86400), 'day');
  if (seconds < 2592000) return pluralize(Math.floor(seconds / 604800), 'week');
  if (seconds < 31536000)
    return pluralize(Math.floor(seconds / 2592000), 'month');
  return pluralize(Math.floor(seconds / 31536000), 'year');
};

/*
 * Helper function to pluralize time units.
 *
 * @param count The number of units.
 * @param unit The time unit (e.g., 'minute', 'hour').
 * @returns A string with the count and unit, properly pluralized.
 */
const pluralize = (count: number, unit: string) => {
  return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
};
