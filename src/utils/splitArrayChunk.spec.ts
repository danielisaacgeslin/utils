import { expect } from 'chai';

import { splitArrayChunk } from './splitArrayChunk';

describe('arraySplitChunk', () => {
    it('should split', () => {
        const array = [1, 2, 3, 4, 5, 6];
        expect(splitArrayChunk<number>(array)).to.eql([[1], [2], [3], [4], [5], [6]]);
    });

    it('should split with even chunk size', () => {
        const array = [1, 2, 3, 4, 5, 6];
        expect(splitArrayChunk<number>(array, 2)).to.eql([[1, 2], [3, 4], [5, 6]]);
    });

    it('should split with odd chunk size', () => {
        const array = [1, 2, 3, 4, 5, 6, 7];
        expect(splitArrayChunk<number>(array, 3)).to.eql([[1, 2, 3], [4, 5, 6], [7]]);
    });
});
