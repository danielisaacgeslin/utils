"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment-timezone");
exports.getTestDate = (date = '2019-03-05 11:01:45') => moment(date).tz('America/Los_Angeles').toDate();
//# sourceMappingURL=entities.js.map