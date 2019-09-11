"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEpic = (obs$, callback, delay = 0) => new Promise(resolve => {
    const actionList = [];
    obs$.subscribe(action => actionList.push(action));
    setTimeout(() => {
        callback(actionList);
        resolve();
    }, delay);
});
//# sourceMappingURL=runEpic.js.map