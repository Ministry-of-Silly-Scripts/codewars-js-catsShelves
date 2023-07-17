const { catsShelves } = require('../src/index');

test('catsShelves', () => {
  expect(catsShelves(0)).toBe(true);
});
