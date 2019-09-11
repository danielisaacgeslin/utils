"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitArrayChunk = (array, chunkSize = 1) => array.map((_, i) => i % chunkSize === 0 ? array.slice(i, i + chunkSize) : undefined).filter(c => c !== undefined);
//# sourceMappingURL=splitArrayChunk.js.map