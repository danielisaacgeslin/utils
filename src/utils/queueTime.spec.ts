import { expect } from 'chai';
import { of } from 'rxjs';

import { queueTime } from './queueTime';

describe('queueTime', () => {
  it('should queue the emission of values', done => {
    const then = Date.now();
    const fn1 = () => expect(Date.now() - then).to.be.lessThan(100);
    const fn2 = () => expect(Date.now() - then).to.be.greaterThan(99);

    const fn3 = () => {
      expect(Date.now() - then).to.be.greaterThan(199);
      expect(Date.now() - then).to.be.lessThan(270);
    };

    of(fn1, fn2, fn3)
      .pipe(queueTime(100))
      .subscribe(
        val => {
          val();
        },
        null,
        () => done()
      );
  });
});
