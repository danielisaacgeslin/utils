import { expect } from 'chai';

import { parseUrlSearch } from './parseUrlSearch';

describe('parseUrlSearch', () => {
  it('should parse a search', () => {
    expect(parseUrlSearch('?a=hi&b=bye')).to.deep.equal({ a: 'hi', b: 'bye' });
  });

  it('should parse a search with initial value', () => {
    expect(parseUrlSearch('?a=hi&b=bye', { a: 'x', b: 'y', c: 'z' })).to.deep.equal({ a: 'hi', b: 'bye', c: 'z' });
  });
});
