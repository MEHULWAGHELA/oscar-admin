const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
    icon:{
        type: String,
        require:true,
        default:''
    },
    p:{
        type: String,
        require:true,
        default:''
    }
})

const training = mongoose.model("training",trainingSchema) ;
module.exports = training;