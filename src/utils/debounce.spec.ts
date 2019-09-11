import { expect } from 'chai';
import { stub } from 'sinon';

import { debounce } from './debounce';

describe('debounce', () => {
  it('should debounce', done => {
    const fn = stub();
    const debounced = debounce(fn, 20);
    debounced('a'); // 1
    debounced('b'); // 2
    setTimeout(() => {
      expect(fn.calledOnce).to.be.true;
      done();
    }, 60);
  });
});
