import { partOfDay } from './partOfDay';

test('Should return Afternoon', () => {
  expect(partOfDay('12:00', false)).toEqual('Afternoon');
});

test('Should return Late Night', () => {
  expect(partOfDay('00:00', false)).toEqual('Late Night');
});
