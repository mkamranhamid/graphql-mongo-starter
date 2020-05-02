"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import the mongoose module
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Connect to MongoDB.
 */
exports.dbconnection = () => {
    const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SRV}/test?retryWrites=true`;
    mongoose_1.default.set('useFindAndModify', false);
    mongoose_1.default.set('useCreateIndex', true);
    mongoose_1.default.set('useNewUrlParser', true);
    mongoose_1.default.connect(mongoDB)
        .then(() => {
        console.log('connection succesful');
    })
        .catch((err) => {
        console.error(err);
        console.log('MongoDB connection error. Please make sure MongoDB is running.');
        process.exit();
    });
};
//# sourceMappingURL=index.js.map