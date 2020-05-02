"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const PersonType_1 = require("../types/PersonType");
const UserType_1 = require("../types/UserType");
const person_1 = __importDefault(require("../resolvers/person"));
const user_1 = __importDefault(require("../resolvers/user"));
const mutation = {
    person: {
        type: PersonType_1.PersonType,
        args: {
            firstname: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            lastname: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
        },
        resolve: person_1.default.Mutation.create
    },
    register: {
        type: UserType_1.UserType,
        args: {
            firstname: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            lastname: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            password: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            username: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
        },
        resolve: user_1.default.Mutation.create
    },
    login: {
        type: UserType_1.UserType,
        args: {
            email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            password: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
        },
        resolve: user_1.default.Mutation.login
    }
};
exports.default = mutation;
//# sourceMappingURL=RootMutation.js.map