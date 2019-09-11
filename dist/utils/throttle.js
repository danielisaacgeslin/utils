"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = (fn, delay) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, delay);
        }
    };
};
//# sourceMappingURL=throttle.js.map