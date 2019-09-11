import { expect } from 'chai';

import { flatten } from './flatten';

describe('flatten', () => {
  it('should map the array to an empty object', () => {
    const array = [['1'], ['2']];
    expect(flatten(array)).to.deep.equal(['1', '2']);
  });
});
