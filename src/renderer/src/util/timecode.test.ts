import { describe, it, expect } from 'vitest';

import { parseHumanishTimecode } from './timecode';

describe('parseHumanishTimecode', () => {
  it('should handle empty string', () => {
    expect(parseHumanishTimecode('')).toBe(null);
  });

  it('should handle all parts', () => {
    expect(parseHumanishTimecode('1h2m3s')).toBe(3723);
    expect(parseHumanishTimecode('1h0m1s')).toBe(3601);
    expect(parseHumanishTimecode('1h2m0s')).toBe(3720);
    expect(parseHumanishTimecode('01h02m03s')).toBe(3723);
    expect(parseHumanishTimecode('01h02m0s')).toBe(3720);
    expect(parseHumanishTimecode('01h00m01s')).toBe(3601);
  });

  it('should handle incomplete parts', () => {
    expect(parseHumanishTimecode('1h')).toBe(3600);
    expect(parseHumanishTimecode('1m')).toBe(60);
    expect(parseHumanishTimecode('1s')).toBe(1);
    expect(parseHumanishTimecode('1h1m')).toBe(3660);
    expect(parseHumanishTimecode('1h1s')).toBe(3601);
    expect(parseHumanishTimecode('1m1s')).toBe(61);
    expect(parseHumanishTimecode('1m0s')).toBe(60);
  });

  it('should handle invalid timecodes', () => {
    expect(parseHumanishTimecode('foobar')).toBe(null);
    expect(parseHumanishTimecode('01:02:03.000')).toBe(null);
  });
});
