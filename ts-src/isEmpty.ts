/**
 * Check if an object is empty
 * @param obj The object being checked
 *
 * @example
 *    U.isEmpty({}) // => true
 *    U.isEmpty({ bob: true }) // => false
 */
export function isEmpty(obj: Object): boolean {
  // @ts-ignore
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
}
