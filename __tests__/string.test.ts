import { capitalizeFirst, cleanString, truncate } from '../src/string';

describe('string utilities', () => {
  describe('utils: capitalize first letter', () => {
    test('capitalizes the first letter of a lowercase string', () => {
      expect(capitalizeFirst('villa')).toBe('Villa');
    });

    test('returns the same string if already capitalized', () => {
      expect(capitalizeFirst('House')).toBe('House');
    });

    test('returns an empty string when input is empty', () => {
      expect(capitalizeFirst('')).toBe('');
    });

    test('handles single-character strings', () => {
      expect(capitalizeFirst('a')).toBe('A');
    });

    // This test covers all common invalid, non-string types
    test.each([
      { input: null, name: 'null' },
      { input: undefined, name: 'undefined' },
      { input: 99, name: 'a number' },
      { input: false, name: 'a boolean' },
      { input: { a: 1 }, name: 'an object' },
      { input: ['a'], name: 'an array' },
    ])('should return an empty string when passed $name', ({ input }) => {
      // We must use 'any' to bypass TypeScript for this runtime test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(capitalizeFirst(input as any)).toBe('');
    });
  });

  describe('utils: truncate string', () => {
    test('returns string unchanged when within limit', () => {
      const str = 'Modern Apartment';
      expect(truncate(str, 50)).toBe(str);
    });

    test('truncates and appends ellipsis when over limit', () => {
      const str = 'A beautiful sea-view apartment in Dubai Marina';
      const result = truncate(str, 11);
      expect(result).toBe('A beautiful...');
    });

    test('handles empty strings gracefully', () => {
      expect(truncate('', 5)).toBe('');
    });

    // This test covers all common invalid, non-string types
    test.each([
      { input: null, name: 'null' },
      { input: undefined, name: 'undefined' },
      { input: 99, name: 'a number' },
      { input: false, name: 'a boolean' },
      { input: { a: 1 }, name: 'an object' },
      { input: ['a'], name: 'an array' },
    ])('should return an empty string when passed $name', ({ input }) => {
      // We must use 'any' to bypass TypeScript for this runtime test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(truncate(input as any)).toBe('');
    });
  });

  describe('util: clean string', () => {
    test('removes extra spaces between words', () => {
      expect(cleanString('  luxury   villa  dubai ')).toBe(
        'luxury villa dubai'
      );
    });

    test('handles tabs and newlines', () => {
      expect(cleanString('  modern\tflat\nin city  ')).toBe(
        'modern flat in city'
      );
    });

    test('returns empty string for only spaces', () => {
      expect(cleanString('     ')).toBe('');
    });

    // This test covers all common invalid, non-string types
    test.each([
      { input: null, name: 'null' },
      { input: undefined, name: 'undefined' },
      { input: 99, name: 'a number' },
      { input: false, name: 'a boolean' },
      { input: { a: 1 }, name: 'an object' },
      { input: ['a'], name: 'an array' },
    ])('should return an empty string when passed $name', ({ input }) => {
      // We must use 'any' to bypass TypeScript for this runtime test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(cleanString(input as any)).toBe('');
    });
  });
});
