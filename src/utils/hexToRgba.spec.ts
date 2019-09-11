import { expect } from 'chai';

import { hexToRgba } from './hexToRgba';

describe('hexToRgba', () => {
  it('should transform a HEX to the RGBA needed', () => {
    expect(hexToRgba('#000', 50)).to.equal('rgba(0, 0, 0, 0.5)');
  });

  it('should transform a 6 digits HEX', () => {
    expect(hexToRgba('#000000', 50)).to.equal('rgba(0, 0, 0, 0.5)');
  });

  it('should transform a HEX to the RGBA needed, with wrong opacity', () => {
    expect(hexToRgba('#000', NaN as any)).to.equal('rgba(0, 0, 0, 1)');
  });
});
