import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from "graphql";

import { PersonType } from '../types/PersonType';
import PeopleResolver from '../resolvers/people';
import PersonResolver from '../resolvers/person';

const query = {
    people: {
        type: GraphQLList(PersonType),
        resolve: PeopleResolver.Query.all
    },
    person: {
        type: PersonType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve: PersonResolver.Query.byId
    }
}
export default query;