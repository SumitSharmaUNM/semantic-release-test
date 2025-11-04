import { generateKey } from '../src/misc';

describe('utils: generateKey', () => {
  test('returns a string', () => {
    const key = generateKey();
    expect(typeof key).toBe('string');
  });

  test('adds the prefix at the start', () => {
    const key = generateKey('user');
    expect(key.startsWith('user-')).toBe(true);
  });

  test('produces different keys each time', () => {
    const key1 = generateKey('item');
    const key2 = generateKey('item');
    expect(key1).not.toBe(key2);
  });
});
