const { catsShelves } = require('../src/index');

describe('the catsShelves canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

test('catsShelves', () => {
  expect(catsShelves(0)).toBe(true);
});
