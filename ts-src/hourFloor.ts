/**
 * Get the hour floor as a Base 32 string
 * @param timestamp The timestamp as a number
 * @returns {string}
 *
 * @example
 *    U.hourFloor(1605532173) // => '1fnp540'
 */

export function hourFloor(timestamp: number): string {
  return (Math.floor(timestamp / 3600000) * 3600000).toString(32);
}
