const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    icon:{
        type: String,
        require:true,
        default:''
    },
    h3:{
        type: String,
        require:true,
        default:''
    },
})

const about = mongoose.model("about",aboutSchema) ;
module.exports = about;