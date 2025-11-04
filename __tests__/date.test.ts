import { formatDate, timeAgo } from '../src/date';

describe('Date utilities', () => {
  // Mock current date to 2025-10-17T12:00:00Z
  const mockNow = new Date('2025-10-17T12:00:00Z');

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(mockNow);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('utils: formatDate', () => {
    test('formats date correctly in DD-MM-YYYY', () => {
      expect(formatDate('2025-10-17')).toBe('17-10-2025');
      expect(formatDate('2025-01-05')).toBe('05-01-2025');
    });

    test('handles full ISO datetime strings', () => {
      expect(formatDate('2025-10-17T08:30:00Z')).toBe('17-10-2025');
    });

    test('pads single-digit day and month', () => {
      expect(formatDate('2025-02-03')).toBe('03-02-2025');
    });

    test('returns empty string for invalid date string', () => {
      expect(formatDate('invalid-date')).toBe('');
    });

    test('handles non string input', () => {
      const invalidValue: any = 12345; // eslint-disable-line @typescript-eslint/no-explicit-any
      expect(formatDate(invalidValue)).toBe('');
    });
  });

  describe('utils: timeAgo', () => {
    test('returns "Just now" for dates within a minute', () => {
      expect(timeAgo('2025-10-17T12:00:00Z')).toBe('Just now');
      expect(timeAgo('2025-10-17T11:59:59Z')).toBe('Just now');
    });

    test('returns minutes ago', () => {
      expect(timeAgo('2025-10-17T11:59:00Z')).toBe('1 minute ago');
      expect(timeAgo('2025-10-17T11:50:00Z')).toBe('10 minutes ago');
    });

    test('returns hours ago', () => {
      expect(timeAgo('2025-10-17T10:00:00Z')).toBe('2 hours ago');
    });

    test('returns days ago', () => {
      expect(timeAgo('2025-10-15T12:00:00Z')).toBe('2 days ago');
    });

    test('returns weeks ago', () => {
      expect(timeAgo('2025-10-01T12:00:00Z')).toBe('2 weeks ago');
    });

    test('returns months ago', () => {
      expect(timeAgo('2025-08-17T12:00:00Z')).toBe('2 months ago');
    });

    test('returns years ago', () => {
      expect(timeAgo('2023-10-17T12:00:00Z')).toBe('2 years ago');
    });

    test('returns empty string for invalid date string', () => {
      expect(formatDate('invalid-date')).toBe('');
    });

    test('handles future dates gracefully', () => {
      expect(timeAgo('2025-10-18T12:00:00Z')).toBe('In the future');
    });

    test('handles non string input', () => {
      const invalidValue: any = 12345; // eslint-disable-line @typescript-eslint/no-explicit-any
      expect(formatDate(invalidValue)).toBe('');
    });
  });
});
