"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = (str) => {
    str = str || '';
    return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length).toLocaleLowerCase()}`;
};
//# sourceMappingURL=capitalize.js.map