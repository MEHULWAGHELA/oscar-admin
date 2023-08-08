const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    img:{
        type: String,
        require:true,
        default:''
    }
})

const partner = mongoose.model("partner",partnerSchema) ;
module.exports = partner;