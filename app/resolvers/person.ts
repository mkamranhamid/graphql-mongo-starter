import { PersonModel } from '../models/Person';

const Query = {
    byId: (root, args, context, info) => {
        return PersonModel.findById(args.id).exec();
    }
}

const Mutation = {
    create: (root, args, context, infor) => {
        const person = new PersonModel(args);
        return person.save();
    }
}

export default { Query, Mutation }