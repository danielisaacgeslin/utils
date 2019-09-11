import { expect } from 'chai';

import { isAcronym } from './isAcronym';

describe('isAcronym', () => {
  it('should identify an acronym', () => {
    expect(isAcronym(123 as any)).to.be.false;
    expect(isAcronym('hola')).to.be.false;
    expect(isAcronym('USA')).to.be.true;
  });
});
