import { Schema, model } from "mongoose";

const PersonSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
}, { timestamps: true });
export const PersonModel = model("person", PersonSchema);