import { formatCurrency, roundToTwoDecimals } from '../src/number';

describe('utils: Number Utilities', () => {
  describe('formatCurrency', () => {
    test('formats AED by default', () => {
      expect(formatCurrency(1500000)).toBe('AED 1,500,000.00');
    });

    test('formats USD with en-US locale', () => {
      expect(formatCurrency(1234.56, 'en-US', 'USD')).toBe('$1,234.56');
    });

    test('formats zero correctly', () => {
      expect(formatCurrency(0)).toBe('AED 0.00');
    });

    test('returns empty string for NaN', () => {
      expect(formatCurrency(NaN)).toBe('');
    });

    test('formats negative numbers', () => {
      expect(formatCurrency(-500, 'en-US', 'USD')).toBe('-$500.00');
    });

    test('handle non number values', () => {
      const invalidValue: any = 'invalid'; // eslint-disable-line @typescript-eslint/no-explicit-any
      expect(formatCurrency(invalidValue, 'en-US', 'USD')).toBe('');
    });
  });

  describe('utils: roundToTwoDecimals', () => {
    test('rounds a number correctly', () => {
      expect(roundToTwoDecimals(123.456)).toBe('123.46');
      expect(roundToTwoDecimals(123.451)).toBe('123.45');
      expect(roundToTwoDecimals(123.001)).toBe('123.00');
    });

    test('handles negative numbers', () => {
      expect(roundToTwoDecimals(-2.345)).toBe('-2.35');
    });

    test('rounds integers correctly', () => {
      expect(roundToTwoDecimals(10)).toBe('10.00');
    });

    test('handles zero', () => {
      expect(roundToTwoDecimals(0)).toBe('0.00');
    });

    test('handles NaN', () => {
      expect(roundToTwoDecimals(NaN)).toBe('');
    });

    test('handle non number values', () => {
      const invalidValue: any = 'invalid'; // eslint-disable-line @typescript-eslint/no-explicit-any
      expect(roundToTwoDecimals(invalidValue)).toBe('');
    });
  });
});
