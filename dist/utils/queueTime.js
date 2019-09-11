"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const delayEx_1 = require("./delayEx");
exports.queueTime = (timeWindow) => (source$) => {
    const subject = new rxjs_1.Subject();
    const queue = delayEx_1.delayEx((fn) => fn(), timeWindow);
    source$.pipe(operators_1.delay(0), operators_1.finalize(() => queue(() => subject.complete()))).subscribe(item => queue(() => subject.next(item)));
    return subject.asObservable();
};
//# sourceMappingURL=queueTime.js.map