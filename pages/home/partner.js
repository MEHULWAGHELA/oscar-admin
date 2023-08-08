const express = require("express");
const router = express.Router();
const partner = require("../../controller/homeController/partnerController");
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


router.get("/getdata" ,partner.getdata);
router.post("/adddata" ,upload.single('img') ,jwtauthontification(['admin']),partner.adddata);
router.post("/deletedata"  ,jwtauthontification(['admin']),partner.deletedata);



module.exports = router