"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamesModel_1 = __importDefault(require("../models/NamesModel"));
const bodyParser_1 = require("../helpers/bodyParser");
const putName = (req, res) => {
    (0, bodyParser_1.bodyParser)(req)
        .then((resp) => {
        console.log(resp);
        NamesModel_1.default
            .findByIdAndUpdate(resp.id, {
            name: resp.name,
            number: Number(resp.number),
            discription: resp.discription,
        })
            .then(() => res.write(JSON.stringify(resp)))
            .catch((err) => {
            res.status = 404;
            res.write(JSON.stringify(err));
        })
            .finally(() => res.end());
    })
        .catch((err) => {
        res.status = 404;
        res.write(JSON.stringify(err));
    });
};
exports.default = putName;
