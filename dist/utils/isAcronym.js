"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAcronym = (str) => {
    if (typeof str !== 'string')
        return false;
    return str.toUpperCase() === str;
};
//# sourceMappingURL=isAcronym.js.map