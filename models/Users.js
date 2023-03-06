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
    },
    desc : {
        type : String,
        default : "",
        max : 50
    },
    city : {
        type : String,
        default : "",
        max : 30
    },
    from : {
        type : String,
        default : "",
        max : 30
    },
    relationship : {
        type : Number,
        enum : [1,2,3]
    }

},
{timestamps:true}
)

module.exports = mongoose.model("Users",userSchema)