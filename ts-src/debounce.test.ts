import { debounce } from '../ts-src/debounce';
import * as sinon from 'sinon';

let clock: sinon.SinonFakeTimers;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test('Should only trigger once', function () {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0);

  // Call it several times with 500ms between each call
  for (let i = 0; i < 10; i++) {
    clock.tick(500);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // wait 1000ms
  clock.tick(1000);
  expect(func).toHaveBeenCalledTimes(1);
});
