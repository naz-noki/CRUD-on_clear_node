"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser_1 = require("../helpers/bodyParser");
const NamesModel_1 = __importDefault(require("../models/NamesModel"));
const postName = (req, res) => {
    (0, bodyParser_1.bodyParser)(req)
        .then((resp) => {
        const newName = new NamesModel_1.default({
            name: resp.name,
            number: resp.number,
            dicription: resp === null || resp === void 0 ? void 0 : resp.discription,
        });
        newName
            .save()
            .then(() => {
            res.status = 202;
            res.write(JSON.stringify(newName));
        })
            .catch((err) => res.write(err))
            .finally(() => res.end());
    });
};
exports.default = postName;
