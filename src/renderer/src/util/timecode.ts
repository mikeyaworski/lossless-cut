// Something of the form HHhMMmSSsm, e.g. 1h2m3s
// Each part is optional. E.g. 1h5s is also valid.
export function parseHumanishTimecode(str: string): number | null {
  if (!str) return null;
  const hmsMatch = str.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!hmsMatch) return null;
  const hours = hmsMatch[1] ? parseInt(hmsMatch[1], 10) : 0;
  const minutes = hmsMatch[2] ? parseInt(hmsMatch[2], 10) : 0;
  const seconds = hmsMatch[3] ? parseInt(hmsMatch[3], 10) : 0;
  return hours * 3600 + minutes * 60 + seconds;
}
