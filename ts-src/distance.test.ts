import { distance } from './distance';
import { LatLong } from './latLong';

test('Should return the correct Base32 value', () => {
  expect(distance(1, 1, 2, 2)).toEqual(157.22543203805722);
});

test('Should return the correct Base32 value', () => {
  const a: LatLong = new LatLong(1, 1);
  const b: LatLong = new LatLong(2, 2);

  expect(distance(a, b)).toEqual(157.22543203805722);
});
