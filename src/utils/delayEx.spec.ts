import { expect } from 'chai';

import { delayEx } from './delayEx';

describe('delayEx', () => {
  it('should delay the emission of values', done => {
    const fn = func => func();
    const delayedFn = delayEx(fn, 100);
    const then = Date.now();
    delayedFn(() => {
      expect(Date.now() - then).to.be.lessThan(100);
    });

    delayedFn(() => {
      expect(Date.now() - then).to.be.greaterThan(99);
    });

    delayedFn(() => {
      expect(Date.now() - then).to.be.greaterThan(199);
      expect(Date.now() - then).to.be.lessThan(270);
      done();
    });
  });
});
