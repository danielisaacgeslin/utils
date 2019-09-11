import { expect } from 'chai';

import { wait } from './wait';

describe('wait', () => {
  it('should wait', async () => {
    const then = Date.now();
    await wait(501);
    const now = Date.now();
    expect(now - then).to.be.greaterThan(500);
  });
});
