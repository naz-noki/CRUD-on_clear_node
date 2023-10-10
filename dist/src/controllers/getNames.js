"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamesModel_1 = __importDefault(require("../models/NamesModel"));
const getNames = (req, res) => {
    NamesModel_1.default
        .find()
        .then((resp) => res.write(JSON.stringify(resp)))
        .catch((err) => {
        res.status = 404;
        res.write(JSON.stringify(err));
    })
        .finally(() => res.end());
};
exports.default = getNames;
