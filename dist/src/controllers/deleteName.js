"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamesModel_1 = __importDefault(require("../models/NamesModel"));
const bodyParser_1 = require("../helpers/bodyParser");
const deleteName = (req, res) => {
    (0, bodyParser_1.bodyParser)(req)
        .then((resp) => {
        NamesModel_1.default
            .findByIdAndDelete(resp.id)
            .then(() => res.status = 204)
            .catch((err) => res.write(JSON.stringify(err)))
            .finally(() => res.end());
    })
        .catch((err) => res.write(JSON.stringify(err)));
};
exports.default = deleteName;
