import { extractFromObj } from './extractFromObj';

test('It should correctly extract values', function () {
  const o = { a: 1, b: 2 };

  expect(extractFromObj(o, ['a'])).toEqual({ a: 1 });
});

test('It should correctly extract more complex structure', function () {
  const o = { a: { bob: 1, steve: 2 }, b: 2 };

  expect(extractFromObj(o, ['a'])).toEqual({ a: { bob: 1, steve: 2 } });
});
