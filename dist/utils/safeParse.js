"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeParse = (item, fallback) => {
    try {
        return JSON.parse(item);
    }
    catch (_a) {
        return fallback !== undefined ? fallback : item;
    }
};
//# sourceMappingURL=safeParse.js.map