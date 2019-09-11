import { expect } from 'chai';

import { generateHslColor } from './generateHslColor';

describe('generateHslColor', () => {
  it('should generate 2 random colors', () => {
    const seed = 0.5;
    const amount = 2;

    expect(generateHslColor(seed, amount)).to.have.lengthOf(2);
  });
});
