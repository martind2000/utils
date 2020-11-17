/**
 * Create an array from an Object using specified fields
 * @param jsonObj The Original object
 * @param wantedFields The required fields
 *
 * @example
 *    U.arrayFromObj({ a: 1, b: 2 }, ['a', 'b']) // => [1, 2]
 */
export function arrayFromObj(jsonObj: Object, wantedFields: string[]): any[] {
  return wantedFields.map((key) => {
    if (jsonObj.hasOwnProperty(key)) {
      const { value }: any = Object.getOwnPropertyDescriptor(jsonObj, key);
      return value;
    }
  });
}
