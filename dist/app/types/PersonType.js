"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.PersonType = new graphql_1.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: graphql_1.GraphQLID },
        firstname: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=PersonType.js.map