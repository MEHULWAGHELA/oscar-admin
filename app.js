require("./config/dbconnect")
const express= require("express");
const app= express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./pages/index")
app.use(express.urlencoded({ extended: false}))
app.use(cors());
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 2000;

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use("/api",router);

app.listen(PORT,()=>{
    console.log(PORT)
})

