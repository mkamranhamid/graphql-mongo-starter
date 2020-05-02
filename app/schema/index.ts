import {
    GraphQLObjectType,
    GraphQLSchema
} from "graphql";
import RootQuery from './RootQuery';
import RootMutation from './RootMutation';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: RootQuery
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: RootMutation
    })
});

export default schema;