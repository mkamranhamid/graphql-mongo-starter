"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const RootQuery_1 = __importDefault(require("./RootQuery"));
const RootMutation_1 = __importDefault(require("./RootMutation"));
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "Query",
        fields: RootQuery_1.default
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: "Mutation",
        fields: RootMutation_1.default
    })
});
exports.default = schema;
//# sourceMappingURL=index.js.map