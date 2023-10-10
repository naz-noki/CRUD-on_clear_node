"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getNames_1 = __importDefault(require("./controllers/getNames"));
const postNames_1 = __importDefault(require("./controllers/postNames"));
const putName_1 = __importDefault(require("./controllers/putName"));
const deleteName_1 = __importDefault(require("./controllers/deleteName"));
const getName_1 = __importDefault(require("./controllers/getName"));
const NamesMethods = (req, res) => {
    if (req.method === 'GET')
        (0, getNames_1.default)(req, res);
    else if (req.method === 'POST')
        (0, postNames_1.default)(req, res);
};
const NameMethods = (req, res) => {
    if (req.method === 'DELETE')
        (0, deleteName_1.default)(req, res);
    else if (req.method === 'PUT')
        (0, putName_1.default)(req, res);
    else if (req.method === 'GET')
        (0, getName_1.default)(req, res);
};
const router = (req, res) => {
    switch (req.url) {
        case '/names':
            {
                NamesMethods(req, res);
                break;
            }
            ;
        case '/name':
            {
                NameMethods(req, res);
                break;
            }
            ;
        default:
            {
                res.end();
                break;
            }
            ;
    }
    ;
};
exports.default = router;
