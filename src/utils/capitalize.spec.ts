import { expect } from 'chai';
import { stub } from 'sinon';

import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should capitalize', () => {
    expect(capitalize('hello')).to.equal('Hello');
    expect(capitalize(null)).to.equal('');
  });
});
