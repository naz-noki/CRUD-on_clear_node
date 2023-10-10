"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NamesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true,
    },
    dicription: {
        type: String,
        require: false,
    },
});
const NamesModel = mongoose_1.default.model('Name', NamesSchema);
exports.default = NamesModel;
