import { arrayFromObj } from './arrayFromObj';

test('It creates the proper array', function () {
  const testObj = { a: 1, b: 2 };

  expect(arrayFromObj(testObj, ['a', 'b'])).toEqual([1, 2]);
});
