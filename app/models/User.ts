import { Schema, model } from "mongoose";
import { pbkdf2Sync, randomBytes } from 'crypto';
import { sign } from 'jsonwebtoken';

const UserSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true }
}, { timestamps: true });

UserSchema.methods.validPassword = (password, hash, salt) => {
    const pwdHash = pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    return hash === pwdHash;
};
UserSchema.methods.setPassword = function (password) {
    this.salt = randomBytes(16).toString('hex');
    this.hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    const token = sign({
        id: this.id,
        username: this.username,
        exp: (exp.getTime() / 1000),
    }, process.env.JWT_SECRET);
    return token;
};
UserSchema.methods.toAuthJSON = function () {
    return {
        id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
    };
};

const UserModel = model('user', UserSchema);

export default UserModel;