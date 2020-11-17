import { throttle } from './throttle';

import * as sinon from 'sinon';

let clock: sinon.SinonFakeTimers;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test('It should throttle calls', function () {
  const func = jest.fn();

  const throttledFunc = throttle(func, 1000);

  throttledFunc();

  expect(func).toHaveBeenCalledTimes(1);

  throttledFunc();

  expect(func).toHaveBeenCalledTimes(1);

  clock.tick(1000);
  throttledFunc();
  expect(func).toHaveBeenCalledTimes(2);
});

