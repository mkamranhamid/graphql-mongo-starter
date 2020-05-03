//Import the mongoose module
import * as mongoose from "mongoose";

/**
 * Connect to MongoDB.
 */
export const dbconnection = async () => {
    try {
        const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SRV}/test?retryWrites=true`;
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useNewUrlParser', true);
        await mongoose.connect(mongoDB);
        console.error('MongoDB connected :)'); // eslint-disable-line
        return true;
    } catch (err) {
        // process.exit();
        throw new Error(err);
    }
}