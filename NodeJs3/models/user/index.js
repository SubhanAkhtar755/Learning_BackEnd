import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String},
    email: {type: mongoose.Schema.Types.String},
    password: {type: mongoose.Schema.Types.String},
});

const User =  mongoose.model("user", userSchema);

export default User;
   