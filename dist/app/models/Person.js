"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PersonModel = mongoose.model("person", {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
});
//# sourceMappingURL=Person.js.map