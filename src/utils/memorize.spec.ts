import { expect } from 'chai';
import { stub } from 'sinon';

import { memorize } from './memorize';

describe('memorize', () => {
  let concat = stub();
  beforeEach(() => {
    concat = stub().returns('ab');
  });

  it('should memorize a functions return values', () => {
    const wrappedConcat = memorize(concat);
    expect(wrappedConcat('a', 'b')).to.equal('ab');
    wrappedConcat('a', 'b');
    expect(concat.callCount).to.equal(1);
  });

  it('should enforce a max cache value', () => {
    const wrappedConcat = memorize(concat, 2);
    wrappedConcat('1', '1');
    wrappedConcat('2', '2');
    wrappedConcat('3', '3');
    wrappedConcat('2', '2');
    expect(concat.callCount).to.equal(3);
  });

  it('should use max duration', done => {
    const wrappedConcat = memorize(concat, 500, 200);
    wrappedConcat('1', '1');
    wrappedConcat('1', '1');
    setTimeout(() => {
      wrappedConcat('1', '1');
      expect(concat.callCount).to.equal(2);
      done();
    }, 400);
  });
});
