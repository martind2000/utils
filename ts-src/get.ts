/**
 *
 * @param obj
 * @param path
 * @param defaultValue
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
