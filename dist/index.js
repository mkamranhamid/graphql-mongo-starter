"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_graphql_1 = __importDefault(require("express-graphql"));
require('dotenv').config();
const connection_1 = require("./app/connection");
const schema = require("./app/schema");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// mongoose connection
connection_1.dbconnection();
// GraphQL
app.use('/graphql', express_graphql_1.default({
    schema: schema,
    graphiql: true
}));
app.listen(port, () => {
    console.log('APP is listening on port:', port);
});
//# sourceMappingURL=index.js.map