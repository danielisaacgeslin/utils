"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObject = (v) => typeof v === 'object' && v !== null;
const getLength = (v) => Object.values(v).length;
exports.deepCompare = (a, b) => {
    const shouldLoop = isObject(a) && isObject(b);
    if (!shouldLoop || a === b)
        return a === b;
    if (getLength(a) !== getLength(b))
        return false;
    for (const key in a)
        if (!exports.deepCompare(a[key], b[key]))
            return false;
    return true;
};
//# sourceMappingURL=deepCompare.js.map