import { LatLong } from './latLong';

/**
 * Calculate the distance between two lat long points
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 *
 * @signature
 *    U.distance(lat1, long1, lat2, long2)
 *
 * @example
 *    distance(1, 1, 2, 2) // => 157.22543203805722;
 */
export function distance(lat1: number, lon1: number, lat2: number, lon2: number): number;

/**
 * Calculate the distance between two lat long points
 * @param latLong1
 * @param latLong2
 *
 * @signature
 *    U.distance(latLong1, latLong2)
 *
 * @example
 *
 *    const a: U.LatLong = new LatLong(1, 1);
 *    const b: U.LatLong = new LatLong(2, 2);
 *    U.distance(a, b) // => 157.22543203805722
 *
 */
export function distance(latLong1: LatLong, latLong2: LatLong): number;

/**
 * Calculate the Distance between two lat long points
 */
export function distance(): number {
  if (arguments.length === 4) {
    return _distance(arguments[0], arguments[1], arguments[2], arguments[3]);
  } else if (arguments.length === 2) {
    return _distance(
      <number>arguments[0].lat,
      <number>arguments[0].long,
      <number>arguments[1].lat,
      <number>arguments[1].long
    );
  } else return 0;
}

function _distance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const p = 0.017453292519943295; // Math.PI / 180
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
