const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        min : 3,
        max : 15,
        unique: true
    },
    email : {
        type : String,
        require: true,
        max : 40,
        unique : true
    },
    password : {
        type : String,
        require : true,
    },
    profilePicture : {
        type : String,
        default : ""
    },
    coverPicture : {
        type : String,
        default : ""
    },
    followers : {
        type : Array,
        default: []
    },
    following : {
        type : Array,
        default: []
    },
    isAdmin : {
        type : Boolean,
        default : false
    }   
},
{timestamps:true}
)

module.exports = mongoose.model("Users",userSchema)