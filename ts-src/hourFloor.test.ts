import { hourFloor } from './hourFloor';

test('Should return the correct Base32 value', () => {
  expect(hourFloor(1605532173)).toEqual('1fnp540');
});
