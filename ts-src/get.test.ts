import { get } from './get';

test('Get something from the object', function () {
  const o = { a: 1, b: 2 };

  expect(get(o, 'b')).toEqual(2);
});

test('Get something from a complex object', function () {
  const o = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5
      }
    }
  };

  expect(get(o, 'b')).toEqual({ c: 3, d: { e: 5 } });
});

test('Get a deep item from a complex object', function () {
  const o = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5
      }
    }
  };

  expect(get(o, 'b.d.e')).toEqual(5);
});
