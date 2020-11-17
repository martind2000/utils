/**
 * Maybe pluralize a count:
 *
 * @param count the value counting
 * @param noun the name of the value
 * @param suffix the suffix
 * @returns {string}
 *
 * @signature
 *    U.maybePluralize(number, noun, suffix)
 *
 * @example
 *    U.maybePluralize(1, 'Bag', 's') // => 1 Bag
 *    U.maybePluralize(5, 'Bag', 's') // => 5 Bags
 */
export function maybePluralize(count: number, noun: string, suffix = 's'): string {
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}
