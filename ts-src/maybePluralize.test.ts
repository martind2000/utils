import { maybePluralize } from './maybePluralize';

test('Should be 1 Bag', () => {
  expect(maybePluralize(1, 'Bag', 's')).toEqual('1 Bag');
});

test('Should be 5 Bags', () => {
  expect(maybePluralize(5, 'Bag', 's')).toEqual('5 Bags');
});
