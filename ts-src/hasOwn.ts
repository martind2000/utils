const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Check if an object has an property
 * @param obj The source object
 * @param prop The required property
 * @returns {boolean}
 *
 * @example
 *    U.hasOwn({bob:'1'}, 'bob') // => true
 */
export function hasOwn(obj: Object, prop: string): boolean {
  return hasOwnProperty.call(obj, prop);
}
