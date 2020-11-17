/**
 * Return the number of Milliseconds to the hour for the supplied timestamp
 * @param currentTimsestamp
 * @param extra
 * @returns {number}
 * *
 * @signature
 *    U.toHour(currentTimsestamp, extra)
 * @example
 *    U.toHour('13:00') // => 1605532173
 */
export function toHour(currentTimsestamp: number, extra: number = 0): number {
  return 3600000 - (currentTimsestamp % 3600000) + extra;
}
