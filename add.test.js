const add = require('./add');

test('outputs the correct answer', () => {
  expect(add(3,5)).toBe(8);
});
