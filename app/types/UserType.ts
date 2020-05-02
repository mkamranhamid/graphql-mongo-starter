import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from "graphql";

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        token: { type: GraphQLString },
    }
});