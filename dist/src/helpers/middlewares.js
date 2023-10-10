"use strict";
const test = (req, res) => {
    if (res.body === undefined)
        res.body = 'lolkek';
};
module.exports = {
    test,
};
