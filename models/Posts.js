const mongoose = require("mongoose");


const PostsSchema = new mongoose.Schema({
   
    userId : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        max : 50
    },
    img : {
        type : String
    },
    likes : {
        type : Array,
        default : []
    }

},
{timestamps:true}
)

module.exports = mongoose.model("Posts",PostsSchema)