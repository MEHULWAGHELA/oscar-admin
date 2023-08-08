const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
    image:{
        type: String,
        require:true,
        default:''
    }
})

const placement = mongoose.model("placement",placementSchema) ;
module.exports = placement
;