import { expect } from 'chai';

import { truncate } from './truncate';

describe('truncate', () => {
  it('should truncate with default elipsis', () => {
    expect(truncate('123456', 3)).to.equal('123...');
  });

  it('should truncate with custom elipsis ', () => {
    expect(truncate('123456', 3, 'mmm')).to.equal('123mmm');
  });

  it('should NOT truncate when string does not exced max length ', () => {
    expect(truncate('123456', 7)).to.equal('123456');
  });
});
