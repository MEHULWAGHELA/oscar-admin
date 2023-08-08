const mongoose = require("mongoose");

const learnSchema = new mongoose.Schema({
    icon:{
        type: String,
        require:true,
        default:''
    },
    h5:{
        type: String,
        require:true,
        default:''
    },
    bg:{
        type: String,
        require:true,
        default:''
    }
})

const learn = mongoose.model("learn",learnSchema) ;
module.exports = learn;