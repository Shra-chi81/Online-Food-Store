const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please enter userName"]
    },
    password:{
        type:String,
        required:[true,"Please enter password"]
    }
}
);
module.exports = mongoose.model("User",userSchema)