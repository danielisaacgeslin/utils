import { expect } from 'chai';

import { generateAcronym } from './generateAcronym';

describe('generateAcronym', () => {
  it('should return null on invalid input', () => {
    expect(generateAcronym(null)).to.equal(null);
  });
  it('should return an acronym ignoring ".", "-" and "_"', () => {
    expect(generateAcronym('a.b.c-d_e f')).to.equal('ABCDEF');
  });
  it('should return an acronym for text with "/"', () => {
    expect(generateAcronym('a b/c')).to.equal('AB');
  });
  it('should return an acronym for text with one word', () => {
    expect(generateAcronym('abcde')).to.equal('AB');
  });
  it('should return an acronym if the given word already is one', () => {
    expect(generateAcronym('ABCDEF')).to.equal('ABCDEF');
  });
  it('should return an acronym ignoring reserved words', () => {
    expect(generateAcronym('united states of america')).to.equal('USA');
  });
});
