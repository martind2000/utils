/**
 * Get the value of an item inside an object
 * @param obj The source object
 * @param path The path to the object
 * @param defaultValue A default value to be returned
 *
 * @example
 *  U.get({ a: 1, b: 2 }, 'b') // => 2
 */
export function get(obj: Object, path: string, defaultValue: any = undefined): any {
  const travel = (regexp: any) => {
    return String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => {
        if (res !== null && res !== undefined && res.hasOwnProperty(key)) {
          const { value }: any = Object.getOwnPropertyDescriptor(res, key);
          return value;
        } else {
          return res;
        }
      }, obj);
  };
  const result = travel(/[,[\].]+?/);

  return result === undefined || result === obj ? defaultValue : result;
}
