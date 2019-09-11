"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHslColor = (seed, amount) => {
    const huedelta = Math.trunc(360 / amount * seed);
    return Array.from(Array(amount))
        .map((_, index) => `hsl(${index * huedelta},100%,${seed * (85 - 65) + 65}%)`);
};
//# sourceMappingURL=generateHslColor.js.map