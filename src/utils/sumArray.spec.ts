import { expect } from 'chai';

import { sumArray } from './sumArray';

describe('sumArray', () => {
  it('should sum every number in an array', () => {
    expect(sumArray([5, 5, 10])).to.equal(20);
  });
});
