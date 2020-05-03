import UserModel from '../models/User';

export const Query = {
    id: (root, args, context, info) => {
        return UserModel.findById(args.id).exec();
    },
    all: (root, args, context, info) => {
        return UserModel.find().exec();
    }
}

export const Mutation = {
    create: (root, args, context, info) => {
        const user = new UserModel(args);
        user.setPassword(args.password);
        return user.save();
    },
    login: async (root, args, context, info) => {
        const user = UserModel.findOne({ email: args.email });
        const userExec = await user.exec();
        // const { validPassword } = userExec.schema.methods;
        if (!userExec) {
            return;
        }
        const isValidPwd = userExec.validPassword(args.password, userExec.hash, userExec.salt);
        if (isValidPwd) {
            return userExec.toAuthJSON();
        }
        return
    }
}

export default { Query, Mutation }