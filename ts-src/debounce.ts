/**
 * Debounce the calling of a function
 * @param fn The function to be debounced
 * @param time How long to wait
 * @returns {Function}
 *
 * @signature
 *    U.debounce(fn, time)
 *

 */
export function debounce(fn: Function, time: number): Function {
  let timeout: NodeJS.Timeout;

  return function (...args: any): any {
    // <-- not an arrow function
    // @ts-ignore
    const functionCall = () => fn.apply(<any>this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}
