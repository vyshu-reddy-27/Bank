const mongoose = require("mongoose");
const user = require("../MODELS/user");

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    MiddleName: {
        type: String,
        required: false,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("User", UserSchema);