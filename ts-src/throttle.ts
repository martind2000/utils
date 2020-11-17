/**
 * Throttle the calling of a function
 * @returns {Function}
 * @param callback
 * @param limit
 *
 * @signature
 *    U.throttle(callback, limit)
 */
export function throttle(callback: Function, limit: number): Function {
  var wait: boolean = false;

  return function (...args: any): any {
    if (!wait) {
      callback.apply(null, args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
