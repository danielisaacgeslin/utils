"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrlSearch = (search, initialValue = {}) => (search.replace('?', '').split('&').map(s => s.split('=')).reduce((total, [key, value]) => (Object.assign({}, total, { [key]: value })), initialValue));
//# sourceMappingURL=parseUrlSearch.js.map