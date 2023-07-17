const { catsShelves } = require('../src/index');

describe('the catsShelves canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('catsShelves', () => {
  it('should return 0 for start shelf 1 and finish shelf 1', () => {
    expect(catsShelves(1, 1)).toBe(0);
  });
});
