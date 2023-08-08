const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
    image:{
        type: String,
        require:true,
        default:''
    }
})

const slider = mongoose.model("slider",sliderSchema) ;
module.exports = slider;