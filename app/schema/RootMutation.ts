import {
    GraphQLString,
    GraphQLNonNull,
} from "graphql";

import { PersonType } from '../types/PersonType';
import { UserType } from '../types/UserType';
import PersonResolver from '../resolvers/person';
import UserResolver from '../resolvers/user';

const mutation = {
    person: {
        type: PersonType,
        args: {
            firstname: { type: GraphQLNonNull(GraphQLString) },
            lastname: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: PersonResolver.Mutation.create
    },
    register: {
        type: UserType,
        args: {
            firstname: { type: GraphQLNonNull(GraphQLString) },
            lastname: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            password: { type: GraphQLNonNull(GraphQLString) },
            username: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: UserResolver.Mutation.create
    },
    login: {
        type: UserType,
        args: {
            email: { type: GraphQLNonNull(GraphQLString) },
            password: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: UserResolver.Mutation.login
    }
}
export default mutation;