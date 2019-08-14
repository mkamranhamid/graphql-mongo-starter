const {
    GraphQLString,
    GraphQLNonNull,
} = require("graphql");

const PersonType = require('../types/PersonType');
const PersonResolver = require('../resolvers/person');

const mutation = {
    person: {
        type: PersonType,
        args: {
            firstname: { type: GraphQLNonNull(GraphQLString) },
            lastname: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: PersonResolver.Mutation.create
    }
}
module.exports = mutation;