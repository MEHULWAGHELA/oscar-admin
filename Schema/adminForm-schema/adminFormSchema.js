const mongoose = require("mongoose");

const adminformSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        default:''
    },
    email:{
        type: String,
        require:true,
        default:''
    },
    role:{
        type:String,
        rrequire:true,
        default:"admin"
    },
    password:{
        type:String,
        default:''
    }
},
{timestamps:true}
)

const adminform = mongoose.model("adminform",adminformSchema) ;
module.exports = adminform;