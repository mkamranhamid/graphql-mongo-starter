import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
} from "graphql";

export const PersonType = new GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
    }
});