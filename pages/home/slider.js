const express = require("express");
const router = express.Router();
const slider = require("../../controller/homeController/sliderController");
const multer= require("multer");
const jwtauthontification = require("../../util/jwtauthontification")


let imagename = ''
var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './public/uploads');    
    }, 
    filename: function (req, file, cb) { 
      imagename = file.originalname
      cb(null , file.originalname);   
   }
});
const upload = multer({ storage: storage })

router.get("/getdata" ,slider.getdata);
router.post("/adddata" ,upload.single('image') ,jwtauthontification(['admin']),slider.adddata);
router.post("/deletedata"  ,jwtauthontification(['admin']),slider.deletedata);



module.exports = router