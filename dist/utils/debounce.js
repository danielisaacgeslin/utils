"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
        if (timerId)
            clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
};
//# sourceMappingURL=debounce.js.map