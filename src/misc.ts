/*
 * Generates a unique key string with an optional prefix.
 *
 * @param prefix The prefix for the generated key. Default is 'key'.
 * @returns A unique key string.
 * @example
 * ```
 * generateKey('item') // 'item-abc123xyz'
 * ```
 */

export function generateKey(prefix = 'key') {
  return `${prefix}-${cryptoRandom()}`;
}

/*
 * Generates a random string using crypto API or Math.random as a fallback.
 *
 * @returns A random string.
 */
function cryptoRandom() {
  return typeof crypto !== 'undefined' && crypto.getRandomValues
    ? Array.from(crypto.getRandomValues(new Uint32Array(2)))
        .map(n => n.toString(36))
        .join('')
    : Math.random().toString(36).substring(2, 15);
}
