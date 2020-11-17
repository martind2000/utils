import { once } from './once';

test('It should trigger once', function () {
  const func = jest.fn();

  const onetimeFunc = once(func);

  onetimeFunc();

  expect(func).toHaveBeenCalledTimes(1);

  onetimeFunc();

  expect(func).toHaveBeenCalledTimes(1);
});
