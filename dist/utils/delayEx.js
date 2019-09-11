"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayEx = (fn, delayTime) => {
    let lastRun = new Date(0).getTime();
    return (...args) => {
        const nextRun = delayTime > Date.now() - lastRun ? Math.max(Date.now(), lastRun) + delayTime : Date.now();
        const nextRunDelay = nextRun - Date.now();
        lastRun = nextRun;
        setTimeout(() => fn(...args), Math.max(nextRunDelay, 0));
    };
};
//# sourceMappingURL=delayEx.js.map