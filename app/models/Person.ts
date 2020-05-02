const mongoose = require("mongoose");

export const PersonModel = mongoose.model("person", {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
});