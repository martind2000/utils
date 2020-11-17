import { isEmpty } from './isEmpty';

test('Object is empty', function () {
  expect(isEmpty({})).toBe(true);
});

test('Object is not empty', function () {
  expect(isEmpty({ bob: true })).toBe(false);
});
