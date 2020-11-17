import { toHour } from './toHour';

test('Should return number of MS to the hour', () => {
  expect(toHour(1605532173, 0)).toEqual(67827);
});
