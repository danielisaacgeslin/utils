import { expect } from 'chai';

import { deepCompare } from './deepCompare';

describe('deepCompare', () => {
  it('should compare simple vars', () => {
    expect(deepCompare(true, true)).to.equal(true);
    expect(deepCompare(true, false)).to.equal(false);
    expect(deepCompare(1, 1)).to.equal(true);
    expect(deepCompare(1, 2)).to.equal(false);
    expect(deepCompare('a', 'a')).to.equal(true);
    expect(deepCompare('a', 'b')).to.equal(false);
    expect(deepCompare(null, null)).to.equal(true);
    expect(deepCompare(NaN, NaN)).to.equal(false);
  });

  it('should simple objects and arrays', () => {
    expect(deepCompare([], [])).to.equal(true);
    expect(deepCompare([1], [1])).to.equal(true);
    expect(deepCompare([1], [2])).to.equal(false);
    expect(deepCompare({}, {})).to.equal(true);
    expect(deepCompare({ a: 1 }, { a: 1 })).to.equal(true);
    expect(deepCompare({ a: 1 }, { a: 2 })).to.equal(false);
  });

  it('should complex objects and arrays', () => {
    const a = { a: 1, b: { c: 2, d: [1, 2, { e: 5 }] } };
    const b = { a: 1, b: { c: 2, d: [1, 2, { e: 5 }] } };
    expect(deepCompare(a, b)).to.equal(true);

    const d = { a: 1, b: { c: 2, d: [1, 2, { e: 5 }] } };
    const e = { a: 1, b: { c: 2, d: [1, 250, { e: 5 }] } };
    expect(deepCompare(d, e)).to.equal(false);
    expect(deepCompare(d, d)).to.equal(true);

    const f = { a: 1, b: { c: 2, d: [1, 2, { e: 5 }] }, f: null };
    const g = { a: 1, b: { c: 2, d: [1, 2, { e: 5 }] } };
    expect(deepCompare(f, g)).to.equal(false);
  });
});
