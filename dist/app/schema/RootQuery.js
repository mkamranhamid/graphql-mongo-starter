"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const PersonType_1 = require("../types/PersonType");
const people_1 = __importDefault(require("../resolvers/people"));
const person_1 = __importDefault(require("../resolvers/person"));
const query = {
    people: {
        type: graphql_1.GraphQLList(PersonType_1.PersonType),
        resolve: people_1.default.Query.all
    },
    person: {
        type: PersonType_1.PersonType,
        args: {
            id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
        },
        resolve: person_1.default.Query.byId
    }
};
exports.default = query;
//# sourceMappingURL=RootQuery.js.map