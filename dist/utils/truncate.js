"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = (str, maxLength, elipsis = '...') => {
    if (str.length < maxLength)
        return str;
    else
        return `${str.substring(0, maxLength)}${elipsis}`;
};
//# sourceMappingURL=truncate.js.map