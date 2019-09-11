"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAcronym_1 = require("./isAcronym");
exports.generateAcronym = (full) => {
    const wordsToOmit = ['of', 'the', 'a', 'an'];
    if (!full || typeof full !== 'string')
        return null;
    full = full.split('/')[0];
    while (full.includes('_'))
        full = full.replace('_', ' ');
    while (full.includes('-'))
        full = full.replace('-', ' ');
    while (full.includes('.'))
        full = full.replace('.', ' ');
    if (isAcronym_1.isAcronym(full))
        return full.trim().split(' ').filter(Boolean).join('');
    if (full.trim().split(' ').length === 1 && full.trim().length >= 2)
        return `${full.trim().substring(0, 2).toUpperCase()}`;
    return full.trim().split(' ')
        .filter(Boolean)
        .filter((part, index) => !wordsToOmit.find(w => w === part.toLowerCase()) || !index)
        .map(part => part.charAt(0).toUpperCase())
        .join('');
};
//# sourceMappingURL=generateAcronym.js.map