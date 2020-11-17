import { hasOwn } from './hasOwn';

let testObj: Object = {
  bob: true
};

test('It has a specified property', function () {
  expect(hasOwn(testObj, 'bob')).toBeTruthy();
});

test('It does not have a specified property', function () {
  expect(hasOwn(testObj, 'Steve')).toBeFalsy();
});
