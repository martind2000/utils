/**
 * Extract an object from another object using specific fields
 * @param jsonObj The source object
 * @param wantedFields The required fields
 * @signature
 *    U.extractFromObj(jsonObj, wantedFields)
 *
 * @example
 *    U.extractFromObj({ a: 1, b: 2 }, ['a']) // => { a: 1 }
 *
 */
export function extractFromObj(jsonObj: Object, wantedFields: string[]): {} {
  return Object.keys(jsonObj).reduce((obj, key) => {
    if (wantedFields.includes(key)) {
      const { value }: any = Object.getOwnPropertyDescriptor(jsonObj, key);

      Object.defineProperty(obj, key, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }

    return obj;
  }, {});
}
