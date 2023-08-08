const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    to:{
        type: String,
        require:true,
        default:''
    },
    img:{
        type: String,
        require:true,
        default:''
    },
    a:{
        type: String,
        require:true,
        default:''
    }
})

const courses = mongoose.model("courses",coursesSchema) ;
module.exports = courses;