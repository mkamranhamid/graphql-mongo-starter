"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../models/Person");
const Query = {
    byId: (root, args, context, info) => {
        return Person_1.PersonModel.findById(args.id).exec();
    }
};
const Mutation = {
    create: (root, args, context, infor) => {
        const person = new Person_1.PersonModel(args);
        return person.save();
    }
};
exports.default = { Query, Mutation };
//# sourceMappingURL=person.js.map