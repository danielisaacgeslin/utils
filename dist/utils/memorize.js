"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memorize = (fn, maxCacheSize = 500, cacheDuration = 0) => {
    let cache = {};
    if (cacheDuration)
        setInterval(() => cache = {}, cacheDuration);
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== (void 0))
            return cache[key];
        try {
            return cache[key] = fn(...args);
        }
        finally {
            const keys = Object.keys(cache);
            if (keys.length > maxCacheSize)
                delete cache[keys[0]];
        }
    };
};
//# sourceMappingURL=memorize.js.map