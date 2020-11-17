/**
 * Trigger a function once and then prevent it from triggering again
 * @returns {Function}
 * @param fn
 *
 * @signature
 *    U.once(fn)
 */
export function once(fn: Function): Function {
  let alreadyCalled: boolean = false;
  let result: Function;

  return function (...args: any): any {
    if (!alreadyCalled) {
      // @ts-ignore
      result = fn.apply(<any>this, args);
      alreadyCalled = true;
    }

    return result;
  };
}
