const mongoose = require("mongoose");

const PersonModel = mongoose.model("person", {
    firstname: String,
    lastname: String
});

module.exports = PersonModel;