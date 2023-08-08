const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
        default:''
    },
    images:{
        type: Array,
        require:true,
        default:[]
    }
})

const gallery = mongoose.model("gallery",gallerySchema) ;
module.exports = gallery;