//Import the mongoose module
import * as mongoose from "mongoose";

/**
 * Connect to MongoDB.
 */
export const dbconnection = () => {
    const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SRV}/test?retryWrites=true`;
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.connect(mongoDB)
        .then(() => {
            console.log('connection succesful'); // eslint-disable-line
        })
        .catch((err) => {
            console.error(err); // eslint-disable-line
            console.log('MongoDB connection error. Please make sure MongoDB is running.'); // eslint-disable-line
            process.exit();
        });
}