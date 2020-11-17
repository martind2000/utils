/**
 * Calculate the distance between two latLongs
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 * @returns {number}
 */
export class LatLong {
  lat: number;
  long: number;
  constructor(lat:number, long:number) {
    this.lat = lat;
    this.long = long;
  }
}
