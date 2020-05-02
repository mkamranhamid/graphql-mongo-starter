import { PersonModel } from '../models/Person';

const Query = {
    all: (root, args, context, info) => {
        return PersonModel.find().exec();
    }
}

const Mutation = {

}

export default { Query, Mutation }