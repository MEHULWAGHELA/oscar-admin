const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
    icon:{
        type: String,
        require:true,
        default:''
    },
    h2:{
        type: String,
        require:true,
        default:''
    },
    p:{
        type: String,
        require:true,
        default:''
    },
    color:{
        type: String,
        default:''
    }
})

const information = mongoose.model("information",informationSchema) ;
module.exports = information;