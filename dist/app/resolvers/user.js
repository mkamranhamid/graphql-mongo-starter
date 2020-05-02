"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
exports.Query = {
    id: (root, args, context, info) => {
        return User_1.default.findById(args.id).exec();
    },
    all: (root, args, context, info) => {
        return User_1.default.find().exec();
    }
};
exports.Mutation = {
    create: (root, args, context, info) => {
        const user = new User_1.default(args);
        user.setPassword(args.password);
        return user.save();
    },
    login: (root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        const user = User_1.default.findOne({ email: args.email });
        const userExec = yield user.exec();
        // const { validPassword } = userExec.schema.methods;
        console.log(userExec);
        if (!userExec) {
            return;
        }
        const isValidPwd = userExec.validPassword(args.password, userExec.hash, userExec.salt);
        if (isValidPwd) {
            return userExec.toAuthJSON();
        }
        return;
    })
};
exports.default = { Query: exports.Query, Mutation: exports.Mutation };
//# sourceMappingURL=user.js.map