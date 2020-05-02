"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../models/Person");
const Query = {
    all: (root, args, context, info) => {
        return Person_1.PersonModel.find().exec();
    }
};
const Mutation = {};
exports.default = { Query, Mutation };
//# sourceMappingURL=people.js.map