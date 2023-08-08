const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
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
    number:{
        type: Number,
        require:true
    },
    subject:{
        type:String,
        requirre:true,
        default:''
    },
    textarea:{
        type:String,
        default:''
    }
},
{timestamps:true}
)

const form = mongoose.model("form",formSchema) ;
module.exports = form;