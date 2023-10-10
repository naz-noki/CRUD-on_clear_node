"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParser = exports.parseToString = exports.checkingCharacterInString = void 0;
const checkingCharacterInString = (prev, curr, next) => {
    if (curr === '&')
        return [','];
    if (curr === '=')
        return [':'];
    const arr = [];
    if (prev === '&' ||
        prev === '=') {
        arr.push('"');
        arr.push(curr);
        return arr;
    }
    ;
    if (next === '&' ||
        next === '=') {
        arr.push(curr);
        arr.push('"');
        return arr;
    }
    ;
    return [curr];
};
exports.checkingCharacterInString = checkingCharacterInString;
const parseToString = (str) => {
    return new Promise((res) => {
        let parsedString = [];
        for (const idx in str.split('')) {
            const prev = str.split('')[Number(idx) - 1];
            const curr = str.split('')[Number(idx)];
            const next = str.split('')[Number(idx) + 1];
            const el = (0, exports.checkingCharacterInString)(prev, curr, next);
            parsedString.push(...el);
        }
        ;
        res(`{"${parsedString.join('')}"}`);
    });
};
exports.parseToString = parseToString;
const bodyParser = (req) => {
    return new Promise((res, rej) => {
        let body = '';
        req
            .on('data', (data) => {
            body += data.toString();
        })
            .on('end', () => {
            (0, exports.parseToString)(body)
                .then((resp) => res(JSON.parse(resp)));
        })
            .on('error', (err) => {
            rej(err);
        });
    });
};
exports.bodyParser = bodyParser;
