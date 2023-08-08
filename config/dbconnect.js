const mongoose = require("mongoose");
require("../Schema/home-schema/sliderSchema")

mongoose.connect("mongodb://127.0.0.1:27017/oscar").then(()=>{
    console.log("connected")
})