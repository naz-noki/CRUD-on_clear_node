"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamesModel_1 = __importDefault(require("../models/NamesModel"));
const bodyParser_1 = require("../helpers/bodyParser");
const getName = (req, res) => {
    (0, bodyParser_1.bodyParser)(req)
        .then((resp) => {
        NamesModel_1.default
            .findById(resp.id)
            .then((nameInfo) => res.write(JSON.stringify(nameInfo)))
            .catch((err) => {
            res.status = 404;
            res.write(JSON.stringify(err));
        })
            .finally(() => res.end());
    });
};
exports.default = getName;
