import { expect } from 'chai';

import { safeParse } from './safeParse';

describe('safeParse', () => {
  it('should parse a string', () => {
    expect(safeParse('{"a":1}')).to.deep.equal({ a: 1 });
  });

  it('should use a fallback when parsing fails', () => {
    expect(safeParse('{', 'fallback')).to.equal('fallback');
  });

  it('should return the entry item when parsing fails and there is no fallback', () => {
    expect(safeParse('{')).to.equal('{');
  });
});
