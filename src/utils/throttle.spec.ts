import { expect } from 'chai';
import { stub } from 'sinon';

import { throttle } from './throttle';

describe('throttle', () => {
  it('should throttle', done => {
    const fn = stub();
    const throttled = throttle(fn, 60);
    throttled('a'); // 1
    setTimeout(() => throttled('b'), 50);
    setTimeout(() => throttled('c'), 80); // 2
    setTimeout(() => {
      expect(fn.calledTwice).to.be.true;
      done();
    }, 200);
  });
});
