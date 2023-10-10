"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./constants");
const router_1 = __importDefault(require("./src/router"));
const app = node_http_1.default.createServer(router_1.default);
mongoose_1.default.connect(constants_1.DB)
    .then(() => console.log('Connect to MongoDB'))
    .catch((err) => console.log(`Error connect to DB: ${err}`));
app.listen(constants_1.APP_PORT, (err) => {
    if (err)
        console.log(`Error on starting app: ${err}`);
    console.log(`App starting at port http://localhost:${constants_1.APP_PORT}`);
});
